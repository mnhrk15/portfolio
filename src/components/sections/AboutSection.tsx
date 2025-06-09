import React from 'react';
import Image from 'next/image';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { Github, Award, Briefcase, GraduationCap } from 'lucide-react';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import ObfuscatedEmailLink from '../ui/ObfuscatedEmailLink';

const AboutSection = () => {
  return (
    <FadeInWhenVisible>
      <Section id="about" className="bg-base-white rounded-lg shadow-sm">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Profile */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="/images/profile.png" 
                alt="Hiraku"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold font-montserrat text-text-dark">峯 陽楽</h3>
              <p className="text-text-main">Mine Hiraku</p>
            </div>
            
            <div className="space-y-3 text-sm">
              <ObfuscatedEmailLink user="mnhrk.jh15" domain="gmail" tld="com" />
              <a href="https://github.com/mnhrk15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent">
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <Briefcase size={20} className="mr-2 text-accent" />
                自己PR
              </h4>
              <p className="text-sm leading-relaxed">
                情報工学を専攻し、AIの社会実装に強い関心を持っています。特に、生成AIの最新動向を追い、それを活用して具体的なビジネス課題を解決することに情熱を注いでいます。インターンシップでは、AI駆動開発による迅速なプロトタイピングと業務効率化で成果を上げ、「課題発見から解決までを一気通貫でやり遂げる力」を培いました。技術の力でビジネスの成長に貢献できるエンジニアを目指しています。
              </p>
            </div>
            
            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <Briefcase size={20} className="mr-2 text-accent" />
                インターンシップ経験
              </h4>
              <div className="text-sm border-l-2 border-accent pl-4">
                <p className="font-bold">美容室集客支援ベンチャー企業</p>
                <p className="text-xs text-gray-subtext">2023年3月 ~ 現在</p>
                <p className="mt-1">
                  AIを活用した社内業務効率化アプリや、クライアントである美容室向けの業務効率化ツールを開発。技術者がいない環境で自走し、現場のニーズヒアリングから要件定義、実装、効果測定までを担当しました。
                </p>
              </div>
            </div>

            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <Award size={20} className="mr-2 text-accent" />
                保有資格
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>基本情報技術者 (2022年5月)</li>
                <li>TOEIC L&R Test 755点 (2024年3月)</li>
                <li>応用情報技術者 (2024年12月)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <GraduationCap size={20} className="mr-2 text-accent" />
                学歴
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>九州工業大学 情報工学部 情報工学科 学士課程 (卒業: 2025年3月)</li>
                <li>九州工業大学 大学院 情報工学府 情報創成工学専攻 博士前期課程 (卒業予定: 2027年3月)</li>
              </ul>
            </div>

          </div>
        </div>
      </Section>
    </FadeInWhenVisible>
  );
};

export default AboutSection; 