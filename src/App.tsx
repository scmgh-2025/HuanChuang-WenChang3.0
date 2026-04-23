/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  MapPin, 
  Cpu, 
  TrendingUp, 
  LayoutGrid, 
  Utensils, 
  Hotel, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Users,
  Target,
  BarChart3,
  Globe2,
  Map,
  Radio,
  CreditCard
} from 'lucide-react';

// --- Components ---

const IPhoneMockup = ({ src, className = "" }: { src: string, className?: string }) => (
  <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[6px] rounded-[2.2rem] h-[340px] w-[165px] shadow-2xl overflow-hidden shrink-0 ${className}`}>
    {/* Screen */}
    <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-slate-100">
      <img src={src} className="w-full h-full object-cover" alt="App interface" referrerPolicy="no-referrer" />
    </div>
  </div>
);

const SectionTitle = ({ children, icon: Icon, subtitle }: { children: React.ReactNode, icon?: any, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      {Icon && <div className="p-2 bg-blue-600 rounded-lg text-white"><Icon size={24} /></div>}
      <h2 className="text-4xl font-bold text-slate-900 tracking-tight">{children}</h2>
    </div>
    {subtitle && <p className="text-slate-500 text-xl max-w-3xl leading-relaxed">{subtitle}</p>}
    <div className="h-1 w-20 bg-blue-600 mt-6 rounded-full" />
  </div>
);

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-6 ${className}`}>
    {title && <h3 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">{title}</h3>}
    {children}
  </div>
);

const StatItem = ({ label, value, unit }: { label: string, value: string, unit?: string }) => (
  <div className="flex flex-col">
    <span className="text-slate-500 text-base font-medium mb-1">{label}</span>
    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-bold text-blue-600">{value}</span>
      {unit && <span className="text-slate-400 text-base font-medium">{unit}</span>}
    </div>
  </div>
);

// --- Sections ---

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-slate-900 text-white">
    {/* High-impact background image */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 opacity-30" />
      <img 
        src="wenchang-hero-bg.png" 
        alt="文昌航天发射场"
        className="w-full h-full object-cover opacity-60"
      />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-blue-500/30">
        <Rocket size={16} /> 航天之都 · 数智未来
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
        华创云信与文昌市<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
          文旅大模型运营合作方案
        </span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#background" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
          查看合作方案 <ChevronRight size={20} />
        </a>
      </div>
    </motion.div>
  </section>
);

const BackgroundSection = () => (
  <section id="background" className="py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle icon={Globe2}>一、合作背景</SectionTitle>
    
    <div className="space-y-12 mb-12">
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          1. 全国层面：独特的航天王牌
        </h3>
        <Card className="border-l-4 border-l-blue-600">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-slate-600 leading-relaxed text-2xl">
                文昌是中国唯一拥有滨海航天发射场的城市，具备低纬度发射优势。"到文昌追火箭"已成为全国爱好者的年度盛事。
              </p>
              <div className="space-y-4">
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    { t: "瑶光观礼平台", d: "可容纳 2000 人，最佳视觉观测位，距商业发射工位仅1.5-2公里" },
                    { t: "航天科普中心", d: "46 项互动展品，覆盖航天历史、火箭发射、空间科学、未来探索等多维主题" },
                    { t: "航天观礼中心", d: "官方综合性观礼园区，位于龙楼镇，集观礼、研学、VR体验于一体，可容纳千人，主打团队研学服务" },
                    { t: "陨石博物馆/航天乐园", d: "多元化娱乐与科普深度结合" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl group hover:bg-blue-50 transition-colors">
                      <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={16}/>
                      <div>
                        <div className="font-bold text-slate-800 text-lg">{item.t}</div>
                        <div className="text-base text-slate-500">{item.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center shadow-lg shadow-blue-200">
                  <div className="text-blue-200 text-base font-medium mb-1 uppercase">2025 任务频率</div>
                  <div className="text-6xl font-black mb-1">12<span className="text-2xl ml-1">次</span></div>
                  <div className="text-blue-100 text-sm">发射任务数量创新高</div>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center">
                  <div className="text-slate-400 text-base font-medium mb-1 uppercase">商业发射能力</div>
                  <div className="text-6xl font-black mb-1">60<span className="text-2xl ml-1">发+</span></div>
                  <div className="text-slate-500 text-sm">双工位支撑年能力</div>
                </div>
                <div className="bg-slate-100 rounded-3xl p-8 flex flex-col justify-center border border-slate-200">
                  <div className="text-slate-500 text-base font-medium mb-1 uppercase">园区企业</div>
                  <div className="text-5xl font-bold text-slate-900 mb-1">700<span className="text-xl ml-1">家+</span></div>
                  <div className="text-slate-400 text-sm">全产业链生态集聚</div>
                </div>
                <div className="bg-slate-100 rounded-3xl p-8 flex flex-col justify-center border border-slate-200">
                  <div className="text-slate-500 text-base font-medium mb-1 uppercase">产业营收</div>
                  <div className="text-5xl font-bold text-slate-900 mb-1">200<span className="text-xl ml-1">亿</span></div>
                  <div className="text-slate-400 text-sm">破百亿级营收规模</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          2. 海南层面：政策与产业双重驱动
        </h3>
        <Card className="border-l-4 border-l-indigo-600">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 p-8 bg-indigo-600 rounded-3xl text-white relative overflow-hidden flex flex-col justify-center shadow-lg shadow-indigo-200">
              <Award className="absolute -right-4 -bottom-4 text-indigo-500/30" size={160} />
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4 flex items-center gap-2">自贸港封关运作</h4>
                <p className="text-indigo-100 leading-relaxed mb-6 font-light text-lg">
                  2025年12月18日正式启动全岛封关，文昌将深度融入全球产业链，享受“零关税、低税率、简税制”红利。
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-indigo-100 transition-colors flex flex-col justify-center gap-6">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center"><Target className="text-indigo-600" size={28}/></div>
                <div>
                  <h5 className="text-3xl font-bold text-slate-800 mb-3">2025 政府工作报告</h5>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    "只争朝夕发展航天旅游，谋划推进航天主题公园等重大项目落地，加快推动航天科普中心、航天观礼平台等航天旅游项目建设，打造'航天旅游之都'"。
                  </p>
                </div>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-indigo-100 transition-colors flex flex-col justify-center gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center"><Users className="text-blue-600" size={28}/></div>
                <div>
                  <h5 className="text-3xl font-bold text-slate-800 mb-3">2026 政府工作报告</h5>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    "系统布局航天营地、精品民宿等配套项目，拓展体验消费、情绪消费等服务消费新场景"。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <div className="mt-20">
      <h3 className="text-3xl font-bold text-slate-800 mb-10 flex items-center gap-3">
        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
        3.文昌在文旅、餐饮、特产方面的特色资源
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white border-none shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200"><Utensils size={24}/></div>
            <h4 className="font-bold text-2xl">文化餐饮：百亿级产业群</h4>
          </div>
          <div className="space-y-4">
            <p className="text-base text-slate-600 leading-relaxed">
              全市拥有在册餐饮主体约3600家，涵盖老爸茶、海鲜餐饮、特色小吃、简餐、团队餐等多元业态核心产品<span className="font-bold text-slate-900 ml-1 text-lg">文昌鸡</span>作为海南四大名菜之首，年产值高达34.39亿元。
            </p>
            <div className="flex flex-wrap gap-2">
              {['文昌鸡', '老爸茶', '特色小吃', '海鲜餐饮'].map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-md"># {tag}</span>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-white border-none shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-200"><Hotel size={24}/></div>
            <h4 className="font-bold text-2xl">民宿文旅：航天IP溢出</h4>
          </div>
          <div className="space-y-4">
            <p className="text-base text-slate-600 leading-relaxed">
              聚焦龙楼镇“火箭之乡”，民宿日接待能力超万人。仅<span className="font-bold text-slate-900 ml-1 text-lg">“村VA”</span>期间单次旅游综合收益即突破1.7亿元。
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> 滨海航天科普研学线路</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> 航天营地、航天乐园体系</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> 铜鼓岭/石头度假生活区</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-none shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-200"><ShoppingBag size={24}/></div>
            <h4 className="font-bold text-2xl">本地特产：享誉海内外</h4>
          </div>
          <div className="space-y-4">
            <p className="text-base text-slate-600 leading-relaxed">
              素有“海南椰子半文昌”之美誉，作为世界闻名的<span className="font-bold text-slate-900 ml-1 text-lg">椰子之乡</span>。锦山牛肉干、铺前糟粕醋等国家地理标志产品远销海内外。
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-2 bg-emerald-50 rounded-lg text-center">
                <div className="text-emerald-700 font-bold text-base">椰子加工</div>
                <div className="text-xs text-emerald-600/70 uppercase">World Famous</div>
              </div>
              <div className="p-2 bg-emerald-50 rounded-lg text-center">
                <div className="text-emerald-700 font-bold text-base">糟粕醋</div>
                <div className="text-xs text-emerald-600/70 uppercase">Local Specialty</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const ValueSection = () => (
  <section id="values" className="py-24 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <SectionTitle icon={Cpu} subtitle="落实政府规划、革新服务模式、重构商业逻辑。">二、AI智能体赋能核心价值</SectionTitle>
      
      {/* 1. 落实文昌市政府工作报告方面 */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-l-blue-600 pl-4">1. 落实文昌市政府工作报告方面</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "“人工智能+”消费探索", d: "文旅智能体是消费升级的重要抓手，赋能个性化、情境化与沉浸式体验。" },
            { t: "系统布局航天营地、精品民宿等配套项目", d: "系统布局航天营地、民宿提升服务能力，实现从“过夜型”向“沉浸型”升级。" },
            { t: "拓展体验消费、情绪消费等服务消费新场景", d: "作为文旅体验经济与情绪价值消费的基础设施，提供数智化创新亮点。" },
            { t: "打造航天文旅标志性项目", d: "成为航天文旅标志性项目的数字化第一入口，集成导览、问答、规划等功能。" },
          ].map((item, i) => (
            <Card key={i} className="hover:border-blue-300 transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-bold text-slate-800 mb-3 leading-tight text-xl">{item.t}</h4>
              <p className="text-base text-slate-500 leading-relaxed font-light">{item.d}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 2. 管理服务方式革新方面 */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-l-blue-600 pl-4">2. 管理服务方式革新方面：从“被动应对”到“主动服务”</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-700">现状与挑战</h4>
            <div className="space-y-6">
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-sm text-orange-600 font-bold mb-1 uppercase tracking-wider">潮汐效应压力</div>
                <div className="text-3xl font-bold text-slate-800">黄金周 30万人次</div>
                <div className="text-base text-slate-500 mt-1">短时间内大量游客涌入，传统人工服务难以覆盖。</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-sm text-slate-500 font-bold mb-1 uppercase tracking-wider">服务模式</div>
                <div className="text-2xl font-medium text-slate-800">被动应对 × 碎片化</div>
                <div className="text-base text-slate-500 mt-1">缺乏全周期、全场景的长效服务机制。</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center shadow-xl shadow-blue-200/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full" />
            <h4 className="text-4xl font-bold mb-6">AI智能体的革新路径</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="font-bold text-2xl mb-2">覆盖全场景</div>
                <p className="text-lg text-blue-50 opacity-80 leading-relaxed font-light">整合“吃、住、行、游、购、娱”全场景，通过AI实现服务资源的最优匹配与分流。</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="font-bold text-2xl mb-2">覆盖全周期</div>
                <p className="text-lg text-blue-50 opacity-80 leading-relaxed font-light">覆盖“行前-行中-行后”全生命周期，提供咨询、规划、回访等24小时主动式服务。</p>
              </div>
              <div className="md:col-span-2 p-6 bg-blue-500/30 rounded-2xl border border-white/10">
                <div className="font-bold text-xl mb-2">管理效能</div>
                <p className="text-lg text-blue-50 opacity-80 leading-relaxed font-light">大幅缓解政府与景区在线下发射期间的咨询服务压力，提升全域文旅产业服务能力。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 形成新的盈利增长点 */}
      <div className="bg-white rounded-[3.5rem] py-24 px-8 lg:px-16 text-slate-900 overflow-hidden relative border border-slate-100 shadow-2xl shadow-slate-100">
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-blue-50/50 to-transparent opacity-60 pointer-events-none" />
        
        {/* Header Area */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-base font-bold tracking-widest uppercase mb-6 border border-blue-600/20">
            商业逻辑重构
          </div>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-slate-900">3. 形成新的盈利增长点</h3>
          <p className="text-slate-500 text-2xl leading-relaxed font-light mx-auto max-w-2xl">针对“发射即旺季，过后即冷清”的潮汐效应，通过AI重构产品体系，将流量红利转化为私域长效收益。</p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              id: "01",
              title: "重构淡季产品",
              subtitle: "从“看火箭”到“玩航天”",
              icon: Rocket,
              color: "blue",
              tags: ["航天研学", "数字文创"],
              details: [
                "寒暑假5-7日深度研学营：整合科普中心、陨石馆、超算中心，用智能体AI生成照片/游记强化社交传播，吸引亲子复购。",
                "开发“一日极客”体验：参与模拟卫星发射点火，参观高科技科普中心及实验室。",
                "航天研学淡季套餐：智能体按用户画像推送定制化航天科普打包产品，填补非发射期的产品空白。",
                "航天数字纪念品：开发AI生成的个性化纪念票根及限量版“文昌航天”数字资产。"
              ]
            },
            {
              id: "02",
              title: "流量精准转化",
              subtitle: "激活30万“外围观众”",
              icon: Target,
              color: "indigo",
              tags: ["LBS 触达", "私域留存"],
              details: [
                "发射前72小时内：基于高德地图LBS定位，游客进入文昌50公里范围自动推送“余票/周边优惠”提醒。",
                "发射当天：推送观礼平台满减券及场内消费优惠。",
                "发射后：推送精彩回顾、下次发射预约提醒及复购优惠。"
              ]
            },
            {
              id: "03",
              title: "二次消费激活",
              subtitle: "全链路商业闭环",
              icon: TrendingUp,
              color: "emerald",
              tags: ["跨界联动", "主题消费"],
              details: [
                "“追箭+度假”套餐：联动铜鼓岭、宋氏祖居、东郊椰林等景点，引导游客延伸3-5天深度游。",
                "餐饮+观礼联动：餐厅消费满额送观礼抵扣券，票券可反向兑换餐饮券，双向导流。",
                "“餐饮+票券”联动：餐饮消费满额赠送研学课程，实现多维度流量互利与商家共赢。",
                "跨季留存激励：参与官方活动，赢取淡季酒店折扣与下次发射观礼台折扣。"
              ]
            }
          ].map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-500 shadow-sm"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 bg-${col.color}-600 rounded-2xl flex items-center justify-center shadow-lg shadow-${col.color}-600/20 text-white`}>
                  <col.icon size={28} />
                </div>
                <span className="text-5xl font-black text-slate-100 italic group-hover:text-blue-50 transition-colors uppercase">{col.id}</span>
              </div>
              
              <h4 className="text-3xl font-bold mb-1 text-slate-800">{col.title}</h4>
              <div className="text-lg text-slate-400 mb-6 font-medium">{col.subtitle}</div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {col.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`px-2.5 py-1 bg-${col.color}-50 text-${col.color}-600 text-xs font-bold rounded-md uppercase tracking-wider border border-${col.color}-100`}>
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-4">
                {col.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-slate-600 text-lg leading-relaxed">
                    <CheckCircle2 size={16} className={`text-${col.color}-500 shrink-0 mt-0.5`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

const SolutionSection = () => (
  <section id="solution" className="py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle icon={LayoutGrid} subtitle="依托华创云信技术与阿里生态，构建“1+N”智能体落地体系。">三、AI智能体解决方案与落地路径</SectionTitle>
    
    <div className="space-y-8 mb-16">
      <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter">核心支撑</h3>
              <p className="text-blue-100 text-lg font-light">CORE FOUNDATION</p>
            </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-5 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 group hover:bg-white/20 transition-all">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg"><Cpu size={28}/></div>
              <div>
                <h4 className="font-bold text-xl mb-1">华创云信技术能力</h4>
                <p className="text-base text-blue-100 opacity-80 leading-relaxed">提供自然语言处理、本地知识图谱、推荐算法等底层能力，已在"多彩黄小西"项目中验证成熟，帮助文昌快速搭建本地智能体生态。</p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 group hover:bg-white/20 transition-all">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg"><Globe2 size={28}/></div>
              <div>
                <h4 className="font-bold text-xl mb-1">阿里巴巴生态</h4>
                <p className="text-base text-blue-100 opacity-80 leading-relaxed">高德地图作为国内活跃用户仅次于微信、淘宝、支付宝的流量入口，占用地图市场以40+%以上的份额。华创云信作为高德地图的合作伙伴，帮助文昌引入顶级流量。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 lg:p-20 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 rounded-[4rem] shadow-xl shadow-blue-100/50 relative overflow-hidden border border-white">
        <div className="absolute -left-20 -bottom-20 w-[30rem] h-[30rem] bg-blue-400/5 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] bg-indigo-400/5 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-20 p-12 opacity-[0.03] rotate-12 -z-0"><Rocket size={400} /></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-10 w-fit shadow-lg shadow-blue-200">
              Architecture Hub
            </div>
            <h3 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-[1.1] text-slate-900">
              "1+N" 体系架构
            </h3>
            <div className="space-y-10">
              <div className="group">
                <h4 className="text-3xl font-bold mb-3 flex items-center gap-3 text-slate-800 transition-colors group-hover:text-blue-600">
                  <div className="w-2 h-8 bg-blue-600 rounded-full" />
                  “1”个总入口
                </h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  <span className="text-slate-900 font-bold block mb-1">文昌文旅智能体</span>
                  作为文昌文旅智能体的总入口，为每一位来文昌的游客打造24小时在线的专属数字分身，从航天观礼、研学旅游、景区游览、酒店入住到餐饮消费，全程智能陪伴，实现“游前规划、游中服务、游后回味”的全链路智慧体验。
                </p>
              </div>
              <div className="group">
                <h4 className="text-3xl font-bold mb-3 flex items-center gap-3 text-slate-800 transition-colors group-hover:text-indigo-600">
                  <div className="w-2 h-8 bg-slate-300 rounded-full group-hover:bg-indigo-400 transition-colors" />
                  “N”个垂直智能体
                </h4>
                <p className="text-slate-500 leading-relaxed text-lg">
                  针对航天观礼、餐饮、酒店民宿、研学等垂直领域构建专属模型。专业的事由专业的模型做，也可单独部署，也能由主智能体调度。
                </p>
              </div>
            </div>
          </div>

          {/* Feature Grid Middle (Narrower now to give phone space) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {[
              { icon: Map, t: "意图解析与规划", d: "深度理解游客偏好，自动生成包含发射观礼、美食打卡、精品住宿的结构化行程。" },
              { icon: Radio, t: "实时服务：", d: "实时应对旅客发射预告、天气情况、停车场等本地服务咨询。" },
              { icon: CreditCard, t: "集成本地文旅生活圈", d: "整合椰子、文昌鸡、糟粕醋等特产商品，周边餐饮智能推荐，娱乐。" }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white/80 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all">
                <div className="flex flex-col gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xl mb-2">{item.t}</h5>
                    <p className="text-base text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* iPhone Mockup Right (LARGER) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-[100px] -z-10" />
              
              <div className="transform scale-[1.5] lg:scale-[1.6] origin-center lg:origin-right transition-transform duration-700 hover:scale-[1.55] lg:hover:scale-[1.65]">
                <IPhoneMockup 
                  src="huangxiaoxi-app.png" 
                />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-8 right-0 lg:-right-4 px-6 py-3 bg-white shadow-2xl rounded-2xl border border-slate-100 flex items-center gap-3 animate-bounce">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-slate-900">1个总入口</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 className="text-3xl font-bold mb-10 text-slate-800 flex items-center gap-3"><LayoutGrid className="text-blue-600"/> “N”个垂直细分智能体集群</h3>
    <div className="space-y-8 lg:space-y-12">
      {[
        { 
          icon: Rocket, 
          t: "航天智能体", 
          d: "关注解决何时发、哪里看、怎么去等痛点问题。提供发射详情提前告知，最佳观礼位置推荐（如瑶光观礼台、航天观礼中心等），配合高德精准引流，带来最佳观礼体验。",
          color: "blue",
          features: ["发射预报", "观礼位推荐", "发射科普"],
          screenshot: "景区智能体.png"
        },
        { 
          icon: GraduationCap, 
          t: "研学智能体", 
          d: "关注研学产品的精准服务。提供在线研学课预约，科普知识问答。运用AI生成照片、视频、游记等，形成社交激励与成就排行榜。",
          color: "indigo",
          features: ["在线研学课预约", "AI生成照片", "AI生成游记"],
          screenshot: "C端智能体.png"
        },
        { 
          icon: Utensils, 
          t: "餐饮智能体", 
          d: "关注“餐饮+观礼”模式。作为文昌文化输出的重要一环，提供扫码点餐、餐饮文化讲解，引导用户购买特产，实现淡旺季错峰消费，形成新的盈利增长点。",
          color: "orange",
          features: ["餐饮文化讲解", "餐饮+观礼模式", "特产引导购买"],
          screenshot: "餐饮智能体.jpg"
        },
        { 
          icon: Hotel, 
          t: "酒店智能体", 
          d: "实现入住全场景高效闭环，包含入住政策智能解答、在线预订选房、客房服务、餐饮出行咨询、停车指引、离店关怀等功能，同时整合本地供应链货盘，为酒店运营降低成本",
          color: "purple",
          features: ["24小时在线咨询", "在线工单", "降低运营成本"],
          screenshot: "酒店智能体.jpg"
        },
        { 
          icon: ShoppingBag, 
          t: "文创商城", 
          d: "关注“二次消费激活”。整合文创商品货盘，支持用户在线购买文创商品，全旅途智能体推送种草，增强用户购买意愿，实现流量精准转化，全面落实文昌市政府工作报告关于促消费的要求。",
          color: "emerald",
          features: ["文创商品货盘", "推送种草", "二次消费激活"],
          screenshot: "商城.jpg"
        }
      ].map((item, i) => (
        <Card key={i} className="bg-white border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 overflow-hidden group p-0">
          <div className="flex flex-col lg:flex-row min-h-[550px]">
            {/* Info Section */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-${item.color}-600 text-white rounded-2xl shadow-lg shadow-${item.color}-100`}>
                  <item.icon size={28} />
                </div>
                <div className="h-0.5 flex-1 bg-slate-100 hidden sm:block" />
              </div>
              <h4 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4">{item.t}</h4>
              <p className="text-slate-500 leading-relaxed text-lg mb-8 font-light max-w-2xl">{item.d}</p>
              
              <div className="flex flex-wrap gap-3">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100">
                    <CheckCircle2 size={12} className={`text-${item.color}-500`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Section */}
            <div className={`lg:w-1/3 bg-${item.color}-50/30 flex items-center justify-center p-12 lg:p-0 relative overflow-hidden`}>
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${item.color}-600/5 rounded-full blur-[80px]`} />
              <div className="relative transform scale-[1.25] transition-transform duration-700 hover:scale-[1.5]">
                <IPhoneMockup src={item.screenshot} className="shadow-2xl" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);

const CaseSection = () => (
  <section id="case" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-400/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
      
      <SectionTitle icon={Award} subtitle="“多彩黄小西”：华创云信文旅智能体的成熟实践。">四、案例参考：贵州成功经验</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="p-10 bg-white rounded-[3rem] shadow-xl shadow-blue-100/50 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <h4 className="text-3xl font-black mb-6 text-slate-900 flex items-center gap-3">
              <span className="w-2 h-10 bg-blue-600 rounded-full" />
              “多彩黄小西”产品概览
            </h4>
            <p className="text-slate-500 leading-relaxed text-xl font-light mb-8">
              该项目成功斩获 <span className="text-blue-600 font-bold">2025 文旅数据创新大赛二等奖</span>。通过构建“游客-商户-政府”三位一体的数智生态，深度解决景区排队、差评治理及精准触达难题。
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-base border border-slate-100">
              <CheckCircle2 size={16} className="text-green-500" /> 支持小程序/网页轻量部署，灵活嵌入现有生态
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "累计服务游客", val: "500w+", desc: "全域覆盖主要景区", color: "text-blue-600", bg: "bg-blue-50" },
              { label: "响应率提升", val: "100%", desc: "实时智能回复建议", color: "text-indigo-600", bg: "bg-indigo-50" },
              { label: "行政人力节省", val: "30%", desc: "大幅降低运营成本", color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "客流预测准度", val: "85%+", desc: "精准引导避开拥堵", color: "text-cyan-600", bg: "bg-cyan-50" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-base text-slate-400 font-medium mb-2">{stat.label}</div>
                <div className={`text-5xl font-black ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-sm text-slate-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end py-10 lg:py-0">
          <div className="relative">
            {/* Glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            
            <div className="transform scale-[1.5] lg:scale-[1.8] origin-center lg:origin-right transition-transform duration-700 hover:rotate-2">
              <IPhoneMockup 
                src="huangxiaoxi-app.png" 
              />
            </div>
            
            <div className="absolute -bottom-10 -left-6 p-6 bg-slate-900 text-white rounded-3xl shadow-2xl max-w-[240px] border border-white/10 hidden md:block animate-pulse">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Success Case</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                实战演示：多彩黄小西智能服务终端，在黄金周期间有效缓解了 40% 的排队压力。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <div className="text-center mb-20 px-6">
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">华创云信各类商户智能体</h3>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              t: "景区智能体",
              icon: MapPin,
              features: ["智能导览与讲解", "票务分时预约", "客流预警引导"],
              screenshot: "景区智能体.png"
            },
            {
              t: "酒店智能体",
              icon: Hotel,
              features: ["入住咨询与房型介绍", "智能推荐与周边服务", "客户关怀与满意度调查"],
              screenshot: "酒店智能体.jpg"
            },
            {
              t: "餐饮智能体",
              icon: Utensils,
              features: ["菜单推荐与口味偏好", "排队预约与在线取号", "优惠推送与食材溯源"],
              screenshot: "餐饮智能体.jpg"
            },
            {
              t: "个人智能体",
              icon: Users,
              features: ["AI帮讲故事", "24h在线接待", "咨询秒回撮合"],
              screenshot: "个人智能体.png"
            },
            {
              t: "诊所/药店智能体",
              icon: Radio,
              features: ["预约挂号与候诊提醒", "健康咨询与用药指导", "院内导航与位置指引"],
              screenshot: "2.png",
              isHorizontal: true
            },
            {
              t: "B端工作台",
              icon: LayoutGrid,
              features: ["经营数据看板", "客户画像管理", "营销工具配置"],
              screenshot: "3.png"
            }
          ].map((agent, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-10 flex flex-col items-center text-center transition-all hover:scale-[1.03] hover:shadow-2xl group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <agent.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-8">{agent.t}</h4>
              <ul className="space-y-4 mb-12 text-left w-full max-w-[240px] mx-auto flex-1">
                {agent.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium text-base">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                      <CheckCircle2 size={12} className="text-blue-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pb-4 w-full flex justify-center">
                {agent.isHorizontal ? (
                  <div className="relative border-gray-900 bg-gray-900 border-[6px] rounded-[1.5rem] h-[180px] w-[300px] shadow-2xl overflow-hidden shrink-0 hover:scale-[1.1] transition-transform duration-500 -translate-y-8">
                    <div className="rounded-[1.1rem] overflow-hidden w-full h-full bg-white">
                      <img src={agent.screenshot} className="w-full h-full object-cover object-top" alt="App interface" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                ) : (
                  <IPhoneMockup src={agent.screenshot} className="scale-[1.15] origin-bottom hover:scale-[1.3] transition-transform duration-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-400 text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 font-bold text-slate-700">
        <Rocket className="text-blue-600" /> 华创云信 × 文昌市
      </div>
      <p>© 2026 华创云信数字科技有限公司. All Rights Reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// --- Main Top Navigation Dock ---

const Navigation = ({ activeSection }: { activeSection: string }) => {
  const links = [
    { id: 'hero', label: '首页', icon: Rocket },
    { id: 'background', label: '背景', icon: MapPin },
    { id: 'values', label: '价值', icon: Cpu },
    { id: 'solution', label: '方案', icon: LayoutGrid },
    { id: 'case', label: '案例', icon: Award },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40">
      {links.map((link) => (
        <a 
          key={link.id} 
          href={`#${link.id}`}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
            activeSection === link.id 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <link.icon size={18} />
          <span className="text-sm font-bold whitespace-nowrap">
            {link.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

// --- App ---

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'background', 'values', 'solution', 'case'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for top menu
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900 scroll-smooth selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Dock (Unified for all screens) */}
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
        <Hero />
        <BackgroundSection />
        <ValueSection />
        <SolutionSection />
        <CaseSection />
      </main>

      <Footer />
    </div>
  );
}
