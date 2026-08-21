import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import { researchData, Publication } from '@/data/publications';
import { FlaskConical, ExternalLink, Github } from 'lucide-react';

// badge のリテラル型をキーにすることで、publications.ts 側のラベル変更時に
// スタイル未定義がコンパイルエラーとして検出される
const badgeStyles: Record<Publication['badge'], string> = {
  '国際会議（査読あり）': 'bg-blue-50 text-blue-700 border border-blue-200',
  '国内講演会（査読なし）': 'bg-gray-100 text-gray-600 border border-gray-200',
};

const ResearchSection = () => {
  return (
    <FadeInWhenVisible>
      <Section id="research" className="bg-base-white rounded-lg shadow-sm">
        <SectionTitle>Research</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="flex items-center text-xl font-bold font-montserrat mb-3">
              <FlaskConical size={20} className="mr-2 text-accent" />
              {researchData.theme}
            </h3>
            <p className="text-sm leading-relaxed">{researchData.overview}</p>
            {researchData.codeUrl && (
              <a
                href={researchData.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-accent hover:underline"
              >
                <Github size={16} />
                研究コードを見る
              </a>
            )}
          </div>

          <div>
            <h4 className="text-lg font-bold font-montserrat mb-4">Publications</h4>
            <ul className="space-y-4">
              {researchData.publications.map((pub) => (
                <li
                  key={pub.title}
                  className="border-l-2 border-accent pl-4 py-1"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${badgeStyles[pub.badge]}`}
                    >
                      {pub.badge}
                    </span>
                    {pub.status && (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        {pub.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-text-dark">{pub.title}</p>
                  <p className="text-xs text-gray-subtext mt-1">{pub.authors}</p>
                  <p className="text-xs text-gray-subtext">
                    {pub.venue}, {pub.date}, {pub.format}
                  </p>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-xs text-accent hover:underline"
                    >
                      <ExternalLink size={12} />
                      学会サイト
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </FadeInWhenVisible>
  );
};

export default ResearchSection;
