import Link from 'next/link';
import React from 'react';
import Section from '@/components/Section';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { instrumentSans } from '../fonts';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const posts = [
  {
    slug: 'vision-tower-bench',
    title: 'Vision Tower Bench',
    description: 'Choosing a vision tower for a text-only LLM',
    date: '2026-09',
  },
];

const formatDate = (date: string) => {
  const [year, month] = date.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const years = [...new Set(sortedPosts.map((post) => post.date.slice(0, 4)))];

export default function BlogPage() {
  return (
    <div className={`mn ${instrumentSans.variable} min-h-screen`}>
      <div className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,48px)]">
        <SiteHeader current="Blog" />
        <div className="pt-[104px]">
          <h1 className="max-w-[900px] text-[clamp(40px,5.4vw,76px)] leading-[1.04] font-medium tracking-[-0.035em]">
            Blog
          </h1>
          <p className="mt-3.5 text-[17px] text-[#74746f]">Technical writing.</p>
        </div>

        {years.map((year) => (
          <Section key={year} id={year} label={year}>
            {sortedPosts
              .filter((post) => post.date.startsWith(year))
              .map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="mn-post">
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.02em]">
                    {post.title}
                    <span className="mn-post-arrow" aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className="mt-2 text-[16.5px] leading-[1.55] text-[#5c5c58]">{post.description}</p>
                  <p className="mt-3 text-[13.5px] tabular-nums text-[#8c8c88]">{formatDate(post.date)}</p>
                </Link>
              ))}
          </Section>
        ))}

        <SiteFooter />
      </div>
    </div>
  );
}
