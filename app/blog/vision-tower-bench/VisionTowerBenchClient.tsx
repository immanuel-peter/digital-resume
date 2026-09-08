"use client";

import { useState } from "react";
import CapabilityTable from "./components/CapabilityTable";
import Changelog from "./components/Changelog";
import Explorer from "./components/Explorer";
import FigureBlock from "./components/FigureBlock";
import FindingCards from "./components/FindingCards";
import Hero from "./components/Hero";
import Limits from "./components/Limits";
import LinksRow from "./components/LinksRow";
import Lightbox, { type LightboxImage } from "./components/Lightbox";
import Method from "./components/Method";
import ProgressBar from "./components/ProgressBar";
import { ResultSection, ResultsHeading } from "./components/ResultSection";
import Toc, { TOC_SECTIONS } from "./components/Toc";
import { useVtbChrome } from "./components/useVtbChrome";
import { Why, Axes } from "./components/WhyAxes";
import { VTB_DEFAULT_VERSION, VTB_VERSIONS, getVTBVersion } from "./versions";

const TOC_IDS = TOC_SECTIONS.map((s) => s.id);

export default function VisionTowerBenchClient({
  initialVersionId,
}: {
  initialVersionId: string;
}) {
  const [versionId, setVersionId] = useState(initialVersionId);
  const version = getVTBVersion(versionId);
  const [towerKey, setTowerKey] = useState(version.defaultTower);
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);
  const { barRef, activeId } = useVtbChrome(TOC_IDS, versionId);

  const onVersionChange = (id: string) => {
    const next = getVTBVersion(id);
    setVersionId(next.id);
    setTowerKey(next.defaultTower);
    const url =
      next.id === VTB_DEFAULT_VERSION
        ? window.location.pathname
        : `${window.location.pathname}?v=${next.id}`;
    window.history.replaceState(null, "", url);
    window.scrollTo(0, 0);
  };

  return (
    <div className="vtb min-h-screen bg-vtb-paper font-vtbody text-[17px] leading-[1.62] text-vtb-ink">
      <ProgressBar barRef={barRef} />
      <Toc activeId={activeId} />

      <div className="mx-auto max-w-[1180px] px-5 pb-20 sm:px-14 sm:pb-[120px]">
        <Hero version={version} />
        <FindingCards cards={version.findingCards} />
        <LinksRow
          version={version}
          versions={VTB_VERSIONS}
          onVersionChange={onVersionChange}
        />
        <Why version={version} />
        <Axes version={version} />
        <CapabilityTable version={version} />
        <Method version={version} />
        <FigureBlock figure={version.fig1} className="mb-[100px]" onZoom={setLightbox} />
        <ResultsHeading version={version} />
        {version.results.map((result) => (
          <ResultSection key={result.id} result={result} onZoom={setLightbox} />
        ))}
        <Limits version={version} />
        <Explorer
          version={version}
          towerKey={towerKey}
          onPick={setTowerKey}
          onZoom={setLightbox}
        />
        <Changelog version={version} />
      </div>
      {lightbox && (
        <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}
