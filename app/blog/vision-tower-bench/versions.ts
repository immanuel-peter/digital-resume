export const POSTPLAN_ASSETS = {
  fig1Protocol:
    "https://assets.postplan.link/01M1WPVYK88W93TH7WWNTVEBNP.png",
  fig2LabelBudget:
    "https://assets.postplan.link/01M1ZKW5D92ZQXYKDEP8HRN3HY.svg",
  fig3Peaks:
    "https://assets.postplan.link/01M1ZKW56506A2MAGZAC3JHH63.svg",
  fig4Forest:
    "https://assets.postplan.link/01M1ZKW4XEMK5TMMKG3ZFQK1CQ.svg",
  explorerSource:
    "https://assets.postplan.link/01M1ZKW5NQX9FGNR69CNXXE1HA.jpg",
  plateDinov2:
    "https://assets.postplan.link/01M1ZKW5VPD1MM76PATXV5Y92V.png",
  plateMuseGlimmer:
    "https://assets.postplan.link/01M1ZKW61HSD7YTE13H5RMH4W4.png",
} as const;

export interface VTBTableCell {
  value: string;
  star?: boolean;
}

export interface VTBTableRow {
  tower: string;
  cells: VTBTableCell[];
}

export interface VTBFigure {
  src: string;
  alt: string;
  label: string;
  title: string;
}

export interface VTBResult {
  id: string;
  kicker: string;
  title: string;
  body: string;
  figure: VTBFigure;
  separated?: boolean;
}

export interface VTBExplorerTower {
  key: string;
  buttonLabel: string;
  plateSrc: string;
  plateAlt: string;
  plateLabel: string;
  name: string;
  note: string;
  navi: string;
  sem: string;
}

export interface VTBVersion {
  id: string;
  selectorLabel: string;
  kicker: string;
  title: string;
  lede: string;
  findingCards: { n: string; title: string; href: string }[];
  links: { label: string; href: string; emoji?: string }[];
  why: string;
  axes: { title: string; body: string }[];
  tableHeading: string;
  tableNote: string;
  tableFootnote: string[];
  rows: VTBTableRow[];
  method: string[];
  fig1: VTBFigure;
  resultsHeading: string;
  results: VTBResult[];
  limitsHeading: string;
  limits: string[];
  limitsNote: string;
  explorerLede: string;
  explorerTowers: VTBExplorerTower[];
  defaultTower: string;
  changelog: { date: string; html: string }[];
}

const v1: VTBVersion = {
  id: "v1",
  selectorLabel: "v1",
  kicker: "Vision Tower Bench",
  title: "Choosing a vision tower for a text-only LLM",
  lede: "We probed six frozen vision towers across stages. No tower wins everywhere, and spatial tasks peak before the last layer. Projectors preserve spatial info, with the size of the gain varying by dataset.",
  findingCards: [
    { n: "Finding 1", title: "No Tower wins every capability", href: "#result-1" },
    {
      n: "Finding 2",
      title: "Spatial information often peaks before the final layer",
      href: "#result-2",
    },
    {
      n: "Finding 3",
      title: "Projector effects depend on the dataset",
      href: "#result-3",
    },
  ],
  links: [
    { label: "Paper", href: "#" },
    { label: "Repo", href: "https://github.com/immanuel-peter/vision-tower-bench" },
    { label: "Towers", href: "https://huggingface.co/collections/immanuelpeter/vision-towers", emoji: "🤗" },
  ],
  why: "Adding vision to a base LLM means choosing a tower, layer, and projector. These are choices full-model benchmarks like MMMU never isolate. We probe frozen features across stages, before any multimodal training, and publish Capability Profiles.",
  axes: [
    {
      title: "Recognition",
      body: "Can a probe identify the object, with plenty of labels and with almost none?",
    },
    {
      title: "Geometry",
      body: "Can it recover depth and surface orientation from a single image?",
    },
    {
      title: "Cross-view",
      body: "Can it find the same physical point again in a second photograph?",
    },
    {
      title: "Occlusion",
      body: "How much recognition survives when half the image is hidden?",
    },
  ],
  tableHeading: "Capability Profiles",
  tableNote:
    "Each column measures a different capability, so the results are not combined into an overall score. Some apparent differences are too small to distinguish on the current test set.",
  tableFootnote: [
    "Muse Glimmer and SigLIP2 are unresolved at full-label recognition. Estimated difference: +0.004, paired 95% interval: [−0.004, +0.012].",
    "↑ higher is better, ↓ lower is better.",
  ],
  rows: [
    {
      tower: "DINOv2",
      cells: [
        { value: "0.369" },
        { value: "0.908" },
        { value: "0.702", star: true },
        { value: "18.85", star: true },
        { value: "0.539", star: true },
        { value: "52%" },
      ],
    },
    {
      tower: "SigLIP2",
      cells: [
        { value: "0.656", star: true },
        { value: "0.917" },
        { value: "0.670" },
        { value: "23.90" },
        { value: "0.401" },
        { value: "49%" },
      ],
    },
    {
      tower: "Muse Glimmer",
      cells: [
        { value: "0.433" },
        { value: "0.921" },
        { value: "0.659" },
        { value: "24.30" },
        { value: "0.214" },
        { value: "52%" },
      ],
    },
    {
      tower: "Kimi K2.6",
      cells: [
        { value: "0.345" },
        { value: "0.886" },
        { value: "0.660" },
        { value: "25.51" },
        { value: "0.365" },
        { value: "28%" },
      ],
    },
    {
      tower: "Qwen3.8",
      cells: [
        { value: "0.245" },
        { value: "0.879" },
        { value: "0.674" },
        { value: "24.24" },
        { value: "0.378" },
        { value: "30%" },
      ],
    },
    {
      tower: "Kimi K3",
      cells: [
        { value: "0.219" },
        { value: "0.837" },
        { value: "0.655" },
        { value: "27.03" },
        { value: "0.333" },
        { value: "20%" },
      ],
    },
  ],
  method: [
    "Towers stay frozen. We tap eight Relative Depth points, plus merged and projected when present. Features cache once; only the readout trains. Recognition is a 1.6M attention pool on ImageNet-100, geometry is Probe3D decoders on DIODE, and correspondence is training-free matching.",
    "Heads are capacity matched with frozen PCA so wider stages don't get bigger heads; the unmatched arm runs as a check. Learning rate is picked per cell on validation, three seeds, with paired bootstrap intervals on headlines.",
  ],
  fig1: {
    src: POSTPLAN_ASSETS.fig1Protocol,
    alt: "Diagram of the bench tapping eight frozen tower stages at relative depths 0.125 to 1.000, feeding cached features to trained readouts for semantics, depth and normals, and correspondence, with optional merged and projected stages",
    label: "Figure 1",
    title: "How the bench taps a model",
  },
  resultsHeading: "Results",
  results: [
    {
      id: "result-1",
      kicker: "Finding 1",
      title: "No Tower wins every capability",
      body: "DINOv2 sweeps depth, normals and cross-view but sits third at recognition; Muse Glimmer leads recognition and sits last on correspondence. On the attention readout, SigLIP2 leads by 0.22 at 1% labels.",
      figure: {
        src: POSTPLAN_ASSETS.fig2LabelBudget,
        alt: "Label efficiency reorders the semantic ranking",
        label: "Figure 2",
        title: "Full-label accuracy is a poor selection criterion",
      },
    },
    {
      id: "result-2",
      kicker: "Finding 2",
      title: "Spatial information often peaks before the final layer",
      body: "Geometry falls before the last layer in 23 of 24 arms while recognition rises to it in 19 of 24. Only Qwen3.8 declines into the last layer on recognition, and only in unmatched arms.",
      figure: {
        src: POSTPLAN_ASSETS.fig3Peaks,
        alt: "Geometry peaks before semantics",
        label: "Figure 3",
        title: "Geometry peaks early",
      },
      separated: true,
    },
    {
      id: "result-3",
      kicker: "Finding 3",
      title: "Projector effects depend on the dataset",
      body: "On DIODE, all 16 projected-against-tower depth and normal comparisons favor the Projector, so it preserves spatial information. However, on KITTI driving scenes none resolve in its favor and two reverse. Qwen3.8 also reverses on ScanNet while gaining on NAVI.",
      figure: {
        src: POSTPLAN_ASSETS.fig4Forest,
        alt: "Projector advantage over the final Tower layer",
        label: "Figure 4",
        title: "The Projector helps on DIODE",
      },
      separated: true,
    },
  ],
  limitsHeading: "What v1 does not establish",
  limits: [
    "These are frozen-representation results, not evaluations of a working VLM.",
    "The full-token attention control was inconclusive, so cross-model attention rankings rest on pooled features.",
    "Geometry and robustness use small test sets, and cross-model geometry still mixes representation quality with native token geometry.",
  ],
  limitsNote:
    "The paper sets out every limitation in full, along with the controls that failed.",
  explorerLede: "Qualitative PCA of frozen patch tokens. Read structure, not color.",
  explorerTowers: [
    {
      key: "dinov2",
      buttonLabel: "DINOv2 — first on correspondence",
      plateSrc: POSTPLAN_ASSETS.plateDinov2,
      plateAlt: "DINOv2 tower PCA plate",
      plateLabel: "DINOv2 · tower · 32 x 32",
      name: "DINOv2 segments its subject",
      note: "The eagle separates as one solid region. First on all three correspondence sets, third on recognition.",
      navi: "0.539 · rank 1 of 6",
      sem: "0.9079 · rank 3 of 6",
    },
    {
      key: "muse_glimmer",
      buttonLabel: "Muse Glimmer — first on recognition",
      plateSrc: POSTPLAN_ASSETS.plateMuseGlimmer,
      plateAlt: "Muse Glimmer tower PCA plate",
      plateLabel: "Muse Glimmer · tower · 32 x 32",
      name: "Muse Glimmer carries no visible structure",
      note: "Near-uniform speckle, no recoverable subject. Last on all three correspondence sets.",
      navi: "0.214 · rank 6 of 6",
      sem: "0.9203 · rank 1 of 6",
    },
  ],
  defaultTower: "dinov2",
  changelog: [
    {
      date: "Sept 2026",
      html: "Vision Tower Bench v1 released, covering six Towers on geometry, semantic and correspondence.",
    },
    {
      date: "Sept 2026",
      html:
        'Vision Towers for Kimi K2.6, Kimi K3, Muse Glimmer and Qwen3.8 published on <a href="https://huggingface.co/collections/immanuelpeter/vision-towers" target="_blank" rel="noopener noreferrer">Hugging Face</a>.',
    },
  ],
};

// To publish a new version, append a new VTBVersion here with its own
// figure URLs. The selector, ?v= routing, and explorer all key off this list.
export const VTB_VERSIONS: VTBVersion[] = [v1];

export const VTB_DEFAULT_VERSION = "v1";

export function getVTBVersion(id: string | undefined | null): VTBVersion {
  return VTB_VERSIONS.find((v) => v.id === id) ?? VTB_VERSIONS[0];
}
