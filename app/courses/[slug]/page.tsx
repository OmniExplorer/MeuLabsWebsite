import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Activity,
  AudioWaveform,
  BookOpenCheck,
  Atom,
  BatteryCharging,
  Blocks,
  Bot,
  BotMessageSquare,
  BriefcaseBusiness,
  BrainCircuit,
  BugPlay,
  AppWindow,
  Braces,
  CalendarDays,
  Camera,
  Cable,
  CheckCircle2,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  Clock,
  CircuitBoard,
  CodeXml,
  Cog,
  Cpu,
  CreditCard,
  Cuboid,
  Database,
  Dices,
  DraftingCompass,
  EarthLock,
  Film,
  Fingerprint,
  FilePenLine,
  FolderKanban,
  FolderSearch,
  Gamepad2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Joystick,
  Kanban,
  KeyRound,
  Lightbulb,
  Map,
  MapPin,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Microchip,
  MonitorUp,
  PackageCheck,
  PackageSearch,
  Palette,
  PenTool,
  PencilLine,
  Presentation,
  Printer,
  Rocket,
  Server,
  Radar,
  RadioTower,
  SatelliteDish,
  Search,
  ShieldAlert,
  ShieldCheck,
  Scale,
  ScanEye,
  Sparkles,
  Scissors,
  Tags,
  Target,
  Trophy,
  University,
  UserRoundCheck,
  Workflow,
  Wrench,
  Users,
  Zap
} from 'lucide-react';
import { allCourses, formatPathwayStage, getCourse, type Course } from '@/data/courses';
import { courseAliases } from '@/data/courseContent';
import { intakes } from '@/data/intakes';
import { CourseCard } from '@/components/CourseCard';
import { CounselorCTA } from '@/components/CounselorCTA';
import { Reveal } from '@/components/Reveal';
import { SyllabusForm } from '@/components/SyllabusForm';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';
import { currentMonthName, daysToNextClosingDate, seededSpots } from '@/lib/registration';

type PageProps = { params: { slug: string } };

const paymentInfoItems = [
  {
    title: '25% sibling discounts',
    Icon: Users
  },
  {
    title: '25% discounts for multiple courses',
    Icon: Tags
  },
  {
    title: 'Pay with Koko, MyFees, or Mintpay',
    Icon: CreditCard
  },
  {
    title: 'Special one-time payment discounts',
    Icon: Handshake
  },
  {
    title: 'Try out the first class for free*',
    Icon: HeartHandshake
  }
];

const projectImages = [
  '/assets/images/project-dashboard.jpg',
  '/assets/images/project-traffic.jpg',
  '/assets/images/project-electronics-lab.jpg',
  '/assets/images/project-game.jpg',
  '/assets/images/project-film.jpg',
  '/assets/images/project-prototype.jpg'
];

const focusThemeClasses = {
  handsOn: {
    card: 'border-orange/25 bg-[linear-gradient(145deg,#FFF8EF_0%,#FFE7CE_100%)]',
    icon: 'bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] shadow-[0_12px_24px_rgba(255,122,0,0.24)]'
  },
  coding: {
    card: 'border-sky/25 bg-[linear-gradient(145deg,#F2FDFF_0%,#DDF8FF_62%,#FFF2DC_100%)]',
    icon: 'bg-gradient-to-br from-[#10A8D8] to-[#23D0C1] shadow-[0_12px_24px_rgba(16,168,216,0.22)]'
  },
  code: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#F1FEFF_0%,#D8F7FF_58%,#FFF0D6_100%)]',
    icon: 'bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] shadow-[0_12px_24px_rgba(14,165,233,0.20)]'
  },
  interface: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE5FF_58%,#FFE9D6_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#EC4899] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  backend: {
    card: 'border-blue-300/40 bg-[linear-gradient(145deg,#F2F7FF_0%,#DBEAFE_58%,#E6FFF5_100%)]',
    icon: 'bg-gradient-to-br from-[#2563EB] to-[#06B6D4] shadow-[0_12px_24px_rgba(37,99,235,0.20)]'
  },
  project: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEA_0%,#FFE8AE_58%,#FFD8C2_100%)]',
    icon: 'bg-gradient-to-br from-[#F59E0B] to-[#F97316] shadow-[0_12px_24px_rgba(245,158,11,0.22)]'
  },
  gameDesign: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFF7ED_0%,#FED7AA_58%,#FEF3C7_100%)]',
    icon: 'bg-gradient-to-br from-[#EA580C] to-[#F59E0B] shadow-[0_12px_24px_rgba(234,88,12,0.22)]'
  },
  gameplay: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#ECFEFF_0%,#CFFAFE_58%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#2563EB] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  levelWorld: {
    card: 'border-lime-300/45 bg-[linear-gradient(145deg,#F7FEE7_0%,#D9F99D_58%,#CCFBF1_100%)]',
    icon: 'bg-gradient-to-br from-[#65A30D] to-[#0D9488] shadow-[0_12px_24px_rgba(101,163,13,0.20)]'
  },
  characterStory: {
    card: 'border-pink-300/40 bg-[linear-gradient(145deg,#FFF1F7_0%,#FBCFE8_58%,#F5D0FE_100%)]',
    icon: 'bg-gradient-to-br from-[#DB2777] to-[#A855F7] shadow-[0_12px_24px_rgba(219,39,119,0.18)]'
  },
  gamePhysics: {
    card: 'border-slate-300/45 bg-[linear-gradient(145deg,#F8FAFC_0%,#E2E8F0_58%,#C7D2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#475569] to-[#4F46E5] shadow-[0_12px_24px_rgba(71,85,105,0.20)]'
  },
  playtesting: {
    card: 'border-red-300/45 bg-[linear-gradient(145deg,#FFF1F2_0%,#FECACA_58%,#FFE4C7_100%)]',
    icon: 'bg-gradient-to-br from-[#DC2626] to-[#F97316] shadow-[0_12px_24px_rgba(220,38,38,0.20)]'
  },
  design: {
    card: 'border-fuchsia-300/40 bg-[linear-gradient(145deg,#FFF4FB_0%,#F2E2FF_58%,#FFEEDB_100%)]',
    icon: 'bg-gradient-to-br from-[#A414E8] to-[#F05BD2] shadow-[0_12px_24px_rgba(164,20,232,0.20)]'
  },
  discovery: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFF9EA_0%,#FFE8BF_58%,#FFD9D2_100%)]',
    icon: 'bg-gradient-to-br from-[#FF8A00] to-[#FF4F1F] shadow-[0_12px_24px_rgba(255,122,0,0.24)]'
  },
  creative: {
    card: 'border-emerald-300/40 bg-[linear-gradient(145deg,#F2FFF6_0%,#DDFBE4_100%)]',
    icon: 'bg-gradient-to-br from-[#00A86B] to-[#65D96C] shadow-[0_12px_24px_rgba(0,168,107,0.22)]'
  },
  strategy: {
    card: 'border-yellow-300/50 bg-[linear-gradient(145deg,#FFFBEA_0%,#FFEFB8_100%)]',
    icon: 'bg-gradient-to-br from-[#F5B400] to-[#FFD166] shadow-[0_12px_24px_rgba(245,180,0,0.22)]'
  },
  data: {
    card: 'border-indigo-300/40 bg-[linear-gradient(145deg,#F4F7FF_0%,#E2E8FF_100%)]',
    icon: 'bg-gradient-to-br from-[#3157D5] to-[#7C9CFF] shadow-[0_12px_24px_rgba(49,87,213,0.20)]'
  },
  dataScience: {
    card: 'border-slate-400/55 bg-[linear-gradient(145deg,#F8FAFC_0%,#E5E7EB_62%,#CBD5E1_100%)]',
    icon: 'bg-gradient-to-br from-[#1F2937] to-[#64748B] shadow-[0_12px_24px_rgba(31,41,55,0.22)]'
  },
  visualization: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#EEFDFF_0%,#CFFAFE_58%,#ECFCCB_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#84CC16] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  machineLearning: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F7F2FF_0%,#E9D5FF_58%,#E0E7FF_100%)]',
    icon: 'bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] shadow-[0_12px_24px_rgba(109,40,217,0.20)]'
  },
  responsibleAi: {
    card: 'border-yellow-500/35 bg-[linear-gradient(145deg,#FFF8E1_0%,#FDE68A_58%,#E7C792_100%)]',
    icon: 'bg-gradient-to-br from-[#7C4A12] to-[#EAB308] shadow-[0_12px_24px_rgba(124,74,18,0.22)]'
  },
  computerVision: {
    card: 'border-teal-300/40 bg-[linear-gradient(145deg,#ECFDF5_0%,#CCFBF1_58%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#0F766E] to-[#2563EB] shadow-[0_12px_24px_rgba(15,118,110,0.20)]'
  },
  generativeAi: {
    card: 'border-pink-300/40 bg-[linear-gradient(145deg,#FFF1F7_0%,#FCE7F3_54%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#DB2777] to-[#0284C7] shadow-[0_12px_24px_rgba(219,39,119,0.18)]'
  },
  electronics: {
    card: 'border-emerald-300/40 bg-[linear-gradient(145deg,#F0FFFB_0%,#D6F8EE_62%,#FFF0D9_100%)]',
    icon: 'bg-gradient-to-br from-[#00A86B] to-[#20C997] shadow-[0_12px_24px_rgba(0,168,107,0.20)]'
  },
  safety: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#EFFFFD_0%,#D9FBF6_100%)]',
    icon: 'bg-gradient-to-br from-[#0F9F9A] to-[#35D6C8] shadow-[0_12px_24px_rgba(15,159,154,0.20)]'
  },
  cyberEthics: {
    card: 'border-sky-300/40 bg-[linear-gradient(145deg,#F0F9FF_0%,#DBEAFE_58%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#0369A1] to-[#0EA5E9] shadow-[0_12px_24px_rgba(3,105,161,0.20)]'
  },
  cyberNetworks: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#FFFFFF_0%,#F0FDF4_58%,#BBF7D0_100%)]',
    icon: 'bg-gradient-to-br from-[#16A34A] to-[#22C55E] shadow-[0_12px_24px_rgba(34,197,94,0.20)]'
  },
  cyberCrypto: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_58%,#E7C792_100%)]',
    icon: 'bg-gradient-to-br from-[#92400E] to-[#F59E0B] shadow-[0_12px_24px_rgba(146,64,14,0.22)]'
  },
  cyberWeb: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE9FE_58%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#6D28D9] to-[#0284C7] shadow-[0_12px_24px_rgba(109,40,217,0.20)]'
  },
  cyberThreat: {
    card: 'border-red-300/45 bg-[linear-gradient(145deg,#FFF1F2_0%,#FECACA_58%,#FFE4C7_100%)]',
    icon: 'bg-gradient-to-br from-[#DC2626] to-[#F97316] shadow-[0_12px_24px_rgba(220,38,38,0.20)]'
  },
  cyberCapstone: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#BBF7D0_58%,#E0E7FF_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#4F46E5] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  espWireless: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#A7F3D0_58%,#D1FAE5_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#10B981] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  stmControl: {
    card: 'border-blue-300/40 bg-[linear-gradient(145deg,#EFF6FF_0%,#DBEAFE_58%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#2563EB] to-[#0891B2] shadow-[0_12px_24px_rgba(37,99,235,0.20)]'
  },
  edgeCompute: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F2_0%,#FFE4E6_58%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#E11D48] to-[#F97316] shadow-[0_12px_24px_rgba(225,29,72,0.18)]'
  },
  tinyMl: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE9FE_58%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#2563EB] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  embeddedIntegration: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_58%,#DCFCE7_100%)]',
    icon: 'bg-gradient-to-br from-[#D97706] to-[#16A34A] shadow-[0_12px_24px_rgba(217,119,6,0.22)]'
  },
  circuitMeasurement: {
    card: 'border-slate-300/50 bg-[linear-gradient(145deg,#F8FAFC_0%,#DDE7F3_58%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#334155] to-[#0EA5E9] shadow-[0_12px_24px_rgba(51,65,85,0.20)]'
  },
  analogSignal: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE9FE_58%,#CFFAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  powerEnergy: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_58%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#F59E0B] to-[#EA580C] shadow-[0_12px_24px_rgba(245,158,11,0.22)]'
  },
  sensorsInstrumentation: {
    card: 'border-teal-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#CCFBF1_58%,#D9F99D_100%)]',
    icon: 'bg-gradient-to-br from-[#0F766E] to-[#65A30D] shadow-[0_12px_24px_rgba(15,118,110,0.20)]'
  },
  motorsGrid: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F2_0%,#FFE4E6_52%,#E0E7FF_100%)]',
    icon: 'bg-gradient-to-br from-[#BE123C] to-[#4F46E5] shadow-[0_12px_24px_rgba(190,18,60,0.18)]'
  },
  hardwareCapstone: {
    card: 'border-orange-300/45 bg-[linear-gradient(145deg,#FFF7ED_0%,#FFEDD5_58%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#EA580C] to-[#2563EB] shadow-[0_12px_24px_rgba(234,88,12,0.20)]'
  },
  mechanicalCad: {
    card: 'border-teal-300/45 bg-[linear-gradient(145deg,#F0FDFA_0%,#CCFBF1_54%,#BFDBFE_100%)]',
    icon: 'bg-gradient-to-br from-[#0F766E] to-[#2563EB] shadow-[0_12px_24px_rgba(15,118,110,0.20)]'
  },
  digitalFabrication: {
    card: 'border-sky-300/45 bg-[linear-gradient(145deg,#F0F9FF_0%,#BAE6FD_56%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#0284C7] to-[#38BDF8] shadow-[0_12px_24px_rgba(2,132,199,0.20)]'
  },
  roboticsActuators: {
    card: 'border-violet-300/45 bg-[linear-gradient(145deg,#F8F4FF_0%,#DDD6FE_56%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#6D28D9] to-[#0284C7] shadow-[0_12px_24px_rgba(109,40,217,0.20)]'
  },
  mechanismsControl: {
    card: 'border-slate-300/50 bg-[linear-gradient(145deg,#F8FAFC_0%,#E5E7EB_56%,#CBD5E1_100%)]',
    icon: 'bg-gradient-to-br from-[#374151] to-[#94A3B8] shadow-[0_12px_24px_rgba(55,65,81,0.20)]'
  },
  engineeringTesting: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#ECFEFF_0%,#CFFAFE_56%,#DCFCE7_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#16A34A] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  robotCapstone: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F2_0%,#FECACA_56%,#FFE4C7_100%)]',
    icon: 'bg-gradient-to-br from-[#DC2626] to-[#F97316] shadow-[0_12px_24px_rgba(220,38,38,0.20)]'
  },
  brandResearch: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_56%,#FFE4C7_100%)]',
    icon: 'bg-gradient-to-br from-[#B45309] to-[#F97316] shadow-[0_12px_24px_rgba(180,83,9,0.20)]'
  },
  contentCopy: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F7_0%,#FCE7F3_56%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#DB2777] to-[#2563EB] shadow-[0_12px_24px_rgba(219,39,119,0.18)]'
  },
  socialMarketing: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#ECFEFF_0%,#CFFAFE_56%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#4F46E5] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  seoPresence: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#BBF7D0_56%,#F0FDFA_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#0F766E] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  campaignAnalytics: {
    card: 'border-blue-300/40 bg-[linear-gradient(145deg,#EFF6FF_0%,#DBEAFE_56%,#DDD6FE_100%)]',
    icon: 'bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-[0_12px_24px_rgba(37,99,235,0.20)]'
  },
  advertisingCampaign: {
    card: 'border-orange-300/45 bg-[linear-gradient(145deg,#FFF7ED_0%,#FED7AA_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#EA580C] to-[#DB2777] shadow-[0_12px_24px_rgba(234,88,12,0.20)]'
  },
  storyboardPlanning: {
    card: 'border-amber-300/45 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#D97706] to-[#DB2777] shadow-[0_12px_24px_rgba(217,119,6,0.20)]'
  },
  stopMotion: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#BBF7D0_56%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#0284C7] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  twoDAnimation: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#ECFEFF_0%,#CFFAFE_56%,#DDD6FE_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#7C3AED] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  threeDAnimation: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE9FE_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#DB2777] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  vfxCompositing: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F2_0%,#FFE4E6_56%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#E11D48] to-[#F97316] shadow-[0_12px_24px_rgba(225,29,72,0.18)]'
  },
  soundPost: {
    card: 'border-blue-300/40 bg-[linear-gradient(145deg,#EFF6FF_0%,#DBEAFE_56%,#CCFBF1_100%)]',
    icon: 'bg-gradient-to-br from-[#2563EB] to-[#0F766E] shadow-[0_12px_24px_rgba(37,99,235,0.20)]'
  },
  universitySelection: {
    card: 'border-blue-300/40 bg-[linear-gradient(145deg,#EFF6FF_0%,#DBEAFE_56%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#1D4ED8] to-[#0891B2] shadow-[0_12px_24px_rgba(29,78,216,0.20)]'
  },
  scholarshipPlanning: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_56%,#DCFCE7_100%)]',
    icon: 'bg-gradient-to-br from-[#D97706] to-[#16A34A] shadow-[0_12px_24px_rgba(217,119,6,0.22)]'
  },
  essaySupport: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE9FE_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#DB2777] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  portfolioDocumentation: {
    card: 'border-slate-300/50 bg-[linear-gradient(145deg,#F8FAFC_0%,#E5E7EB_56%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#475569] to-[#2563EB] shadow-[0_12px_24px_rgba(71,85,105,0.20)]'
  },
  interviewCommunication: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#BBF7D0_56%,#CCFBF1_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#0F766E] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  partnerGuidance: {
    card: 'border-orange-300/45 bg-[linear-gradient(145deg,#FFF7ED_0%,#FED7AA_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#EA580C] to-[#DB2777] shadow-[0_12px_24px_rgba(234,88,12,0.20)]'
  },
  industryRoles: {
    card: 'border-blue-300/40 bg-[linear-gradient(145deg,#EFF6FF_0%,#DBEAFE_56%,#BFDBFE_100%)]',
    icon: 'bg-gradient-to-br from-[#334155] to-[#2563EB] shadow-[0_12px_24px_rgba(51,65,85,0.20)]'
  },
  scrumKanban: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_56%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#D97706] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  projectWork: {
    card: 'border-sky-300/45 bg-[linear-gradient(145deg,#F0F9FF_0%,#BAE6FD_56%,#E0E7FF_100%)]',
    icon: 'bg-gradient-to-br from-[#0284C7] to-[#4F46E5] shadow-[0_12px_24px_rgba(2,132,199,0.20)]'
  },
  businessQaDocs: {
    card: 'border-slate-300/50 bg-[linear-gradient(145deg,#F8FAFC_0%,#E5E7EB_56%,#CBD5E1_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#DB2777] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  performanceFeedback: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_56%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#F59E0B] to-[#EA580C] shadow-[0_12px_24px_rgba(245,158,11,0.22)]'
  },
  internshipMatching: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F2_0%,#FFE4E6_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#0F766E] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  problemDiscovery: {
    card: 'border-cyan-300/40 bg-[linear-gradient(145deg,#ECFEFF_0%,#CFFAFE_56%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#0891B2] to-[#2563EB] shadow-[0_12px_24px_rgba(8,145,178,0.20)]'
  },
  productIdeation: {
    card: 'border-amber-300/50 bg-[linear-gradient(145deg,#FFFBEB_0%,#FDE68A_56%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#F59E0B] to-[#EA580C] shadow-[0_12px_24px_rgba(245,158,11,0.22)]'
  },
  businessModel: {
    card: 'border-emerald-300/45 bg-[linear-gradient(145deg,#ECFDF5_0%,#BBF7D0_56%,#E0F2FE_100%)]',
    icon: 'bg-gradient-to-br from-[#059669] to-[#0284C7] shadow-[0_12px_24px_rgba(5,150,105,0.20)]'
  },
  brandingStory: {
    card: 'border-violet-300/40 bg-[linear-gradient(145deg,#F8F4FF_0%,#EDE9FE_56%,#FCE7F3_100%)]',
    icon: 'bg-gradient-to-br from-[#7C3AED] to-[#DB2777] shadow-[0_12px_24px_rgba(124,58,237,0.20)]'
  },
  investorPitch: {
    card: 'border-slate-300/50 bg-[linear-gradient(145deg,#F8FAFC_0%,#E5E7EB_56%,#DBEAFE_100%)]',
    icon: 'bg-gradient-to-br from-[#475569] to-[#2563EB] shadow-[0_12px_24px_rgba(71,85,105,0.20)]'
  },
  founderMentorship: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF1F2_0%,#FFE4E6_56%,#FED7AA_100%)]',
    icon: 'bg-gradient-to-br from-[#E11D48] to-[#F97316] shadow-[0_12px_24px_rgba(225,29,72,0.18)]'
  },
  professional: {
    card: 'border-rose-300/40 bg-[linear-gradient(145deg,#FFF5F8_0%,#FFE2EC_58%,#FFE8CF_100%)]',
    icon: 'bg-gradient-to-br from-[#E23C7A] to-[#FF8A4C] shadow-[0_12px_24px_rgba(226,60,122,0.18)]'
  }
};
const outcomeIcons = [BookOpenCheck, Bot, FolderKanban, PenTool, MonitorUp, PackageCheck];
const outcomeBadgeClasses = [
  'bg-gradient-to-br from-[#7C3AED] to-[#C084FC] shadow-[0_10px_22px_rgba(124,58,237,0.24)]',
  'bg-gradient-to-br from-[#00A86B] to-[#65D96C] shadow-[0_10px_22px_rgba(0,168,107,0.22)]',
  'bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] shadow-[0_10px_22px_rgba(255,122,0,0.24)]',
  'bg-gradient-to-br from-[#1995D3] to-[#31C3DE] shadow-[0_10px_22px_rgba(25,149,211,0.22)]',
  'bg-gradient-to-br from-[#F5B400] to-[#FFD166] shadow-[0_10px_22px_rgba(245,180,0,0.22)]',
  'bg-gradient-to-br from-[#FF4D8D] to-[#8B5CF6] shadow-[0_10px_22px_rgba(255,77,141,0.20)]'
];

const structureIcons = [BookOpenCheck, Users, CheckCircle2, PackageCheck, Rocket];
const structureBadgeClasses = [
  'bg-gradient-to-br from-[#1995D3] to-[#31C3DE] shadow-[0_10px_20px_rgba(25,149,211,0.2)]',
  'bg-gradient-to-br from-[#00A86B] to-[#65D96C] shadow-[0_10px_20px_rgba(0,168,107,0.2)]',
  'bg-gradient-to-br from-[#FF7A00] to-[#FFB020] shadow-[0_10px_20px_rgba(255,122,0,0.2)]',
  'bg-gradient-to-br from-[#0D3557] to-[#1995D3] shadow-[0_10px_20px_rgba(13,53,87,0.2)]',
  'bg-gradient-to-br from-[#7C3AED] to-[#C084FC] shadow-[0_10px_20px_rgba(124,58,237,0.18)]'
];

const toolLogoMap: Record<string, string> = {
  'adobe after effects': '/assets/logos/tools/adobeaftereffects.svg',
  'adobe premiere pro': '/assets/logos/tools/adobepremierepro.svg',
  'aia holdings': '/assets/images/AIAHoldings.png',
  'aia study abroad': '/assets/images/AIAStudyAbroad.png',
  arduino: '/assets/logos/tools/arduino.svg',
  aseprite: '/assets/logos/tools/aseprite.svg',
  audacity: '/assets/logos/tools/audacity.svg',
  autodesk: '/assets/logos/tools/autodesk.svg',
  bandlab: '/assets/logos/tools/bandlab.svg',
  biet: '/assets/images/biet.png',
  blender: '/assets/logos/tools/blender.svg',
  canva: '/assets/images/Canva.png',
  capcut: '/assets/logos/tools/capcut.svg',
  cura: '/assets/images/Cura.png',
  cyberchef: '/assets/logos/tools/cyberchef.png',
  'c#': '/assets/logos/tools/csharp.svg',
  chatgpt: '/assets/logos/tools/chatgpt.svg',
  clipchamp: '/assets/logos/tools/clipchamp.svg',
  css: '/assets/logos/tools/css.svg',
  'da vinci resolve': '/assets/logos/tools/davinciresolve.svg',
  easyeda: '/assets/logos/tools/easyeda.svg',
  'digital drawing tools': '/assets/images/Digital-Drawing-Tools.png',
  excel: '/assets/logos/tools/excel.svg',
  figma: '/assets/logos/tools/figma.svg',
  firebase: '/assets/logos/tools/firebase.svg',
  flask: '/assets/logos/tools/flask.svg',
  'fusion 360': '/assets/logos/Fusion-360-Logo-removebg-preview.png',
  'generative ai': '/assets/images/GenAi.png',
  github: '/assets/logos/tools/github.svg',
  git: '/assets/logos/tools/github.svg',
  godot: '/assets/logos/tools/godot.svg',
  'google analytics': '/assets/logos/tools/googleanalytics.svg',
  'google colab': '/assets/logos/tools/googlecolab.svg',
  'google trends': '/assets/logos/tools/google.svg',
  'google workspace': '/assets/logos/tools/googleworkspace.svg',
  'browser developer tools': '/assets/logos/tools/browser-devtools.svg',
  html: '/assets/logos/tools/html5.svg',
  javascript: '/assets/logos/tools/javascript.svg',
  jupyter: '/assets/logos/tools/jupyter.svg',
  kaggle: '/assets/logos/tools/kaggle.svg',
  kainovation: '/assets/images/kainovation.png',
  'kainovation technologies': '/assets/images/kainovation.png',
  krita: '/assets/logos/tools/krita.svg',
  linux: '/assets/logos/tools/linux.svg',
  mailchimp: '/assets/logos/tools/mailchimp.svg',
  magicbit: '/assets/logos/magicbit.png',
  'meu labs': '/assets/logos/logo.svg',
  'meta business': '/assets/logos/tools/meta.svg',
  'ml for kids': '/assets/logos/tools/mlforkids.svg',
  'our world in data': '/assets/logos/tools/ourworldindata.svg',
  platformio: '/assets/logos/tools/platformio.svg',
  pencil2d: '/assets/logos/tools/pencil2d.png',
  mqtt: '/assets/logos/tools/mqtt.png',
  'packet tracer': '/assets/images/PacketTracing.png',
  'network simulation': '/assets/images/PacketTracing.png',
  postman: '/assets/logos/tools/postman.svg',
  'power bi': '/assets/logos/tools/powerbi.svg',
  scratchjr: '/assets/logos/ScratchJr__logo.png',
  scratch: '/assets/logos/tools/scratch.svg',
  'safe cyber lab': '/assets/logos/tools/safe-cyber-lab.svg',
  'cyber lab': '/assets/logos/tools/safe-cyber-lab.svg',
  'play-dough': '/assets/logos/Play_doh_craftbrand_logo.svg.png',
  python: '/assets/logos/tools/python.svg',
  nodered: '/assets/logos/tools/nodered.svg',
  raspberry: '/assets/logos/tools/raspberrypi.svg',
  react: '/assets/logos/tools/react.svg',
  'scikit-learn': '/assets/logos/tools/scikitlearn.svg',
  scikitlearn: '/assets/logos/tools/scikitlearn.svg',
  sqlite: '/assets/logos/tools/sqlite.svg',
  'sql databases': '/assets/images/SQLDBTools.png',
  'sql database': '/assets/images/SQLDBTools.png',
  solidworks: '/assets/images/SOLIDWORKS.png',
  'stop motion studio': '/assets/images/StopMotionStudio.png',
  streamlit: '/assets/logos/tools/streamlit.svg',
  tensorflow: '/assets/logos/tools/tensorflow.svg',
  tinkercad: '/assets/images/Tinkercad.png',
  unity: '/assets/logos/tools/unity.svg',
  webflow: '/assets/logos/tools/webflow.svg',
  wireshark: '/assets/logos/tools/wireshark.svg',
  wordpress: '/assets/logos/tools/wordpress.svg'
};

const courseHeroPhotos: Record<string, string> = {
  kx: '/assets/images/hero-robotics.jpg',
  'coding-software': '/assets/images/hero-code.jpg',
  'robotics-iot': '/assets/images/project-prototype.jpg',
  'digital-media': '/assets/images/project-film.jpg',
  se: '/assets/images/hero-code.jpg',
  ds: '/assets/images/project-ai.jpg',
  es: '/assets/images/project-electronics-lab.jpg',
  eee: '/assets/images/electronics-board.jpg',
  mr: '/assets/images/project-electronics-lab.jpg'
};

const toolVisualMap: Record<string, string> = {
  tablet: '/assets/logos/LAPTOPSTABLETS.png',
  laptop: '/assets/logos/LAPTOPSTABLETS.png',
  'craft material': '/assets/logos/ARTSCRAFT.png',
  'maker kit': '/assets/logos/MAKERKITS.png',
  motor: '/assets/logos/MOTORS.png',
  led: '/assets/logos/LIGHTBULB.png',
  'board game': '/assets/logos/BOARDGAMERS.jpg',
  '3d printer': '/assets/logos/3dprinter.png',
  'cnc': '/assets/logos/cnc.png',
  'laser cutter': '/assets/logos/lasercutting.png',
  'liquid etching': '/assets/logos/lasercutting.png',
  camera: '/assets/images/CameraMobileTools.png',
  mobile: '/assets/images/CameraMobileTools.png',
  'hand tool': '/assets/logos/habdtools.png',
  'power tool': '/assets/images/POWERTOOLS.png',
  'multimeter': '/assets/images/Multi-Meter.png',
  'breadboard': '/assets/images/BreadBoard.png',
  'circuit simulation': '/assets/images/LTSpiceLog.png',
  'op-amp': '/assets/images/OPAMPS.png',
  'sensor': '/assets/images/Snesors.png',
  'mosfet': '/assets/images/MOSFETS.png',
  '555 timer': '/assets/images/555Timer.png',
  'pcb tool': '/assets/images/PCBTOOLS.png',
  esp32: '/assets/images/ESP32.png',
  stm32: '/assets/logos/tools/stm32.png',
  'cubeide': '/assets/logos/tools/stm32.png',
  'edge impulse': '/assets/logos/tools/edge-impulse.png',
  'logic analyzer': '/assets/images/LogicAnalyser.png',
  oscilloscope: '/assets/logos/tools/oscilloscope.png'
};

export function generateStaticParams() {
  return [...allCourses.map((course) => ({ slug: course.slug })), ...Object.keys(courseAliases).map((slug) => ({ slug }))];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return {
    title: `${course.internalName || course.title} | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka`,
    description: course.descriptor,
    openGraph: { images: ['/og-default.jpg'] }
  };
}

function getPageTitle(course: Course) {
  return course.internalName || course.title;
}

function formatCourseFormat(format: string) {
  const match = format.match(/^1\s*x\s*(\d+)\s*hr\/week$/i);
  if (match) return `One ${match[1]}-Hour Session Per Week`;
  if (format.includes('weekly scrum session')) {
    return 'One 2-Hour weekly scrum session,\nplus independent project work,\nmentor check-ins, performance reviews,\nand final appraisal';
  }
  return format.replace(/\b(\d+)-hour\b/i, '$1-Hour').replace(/\bsession per week\b/i, 'Session Per Week');
}

function getToolLogo(tool: string) {
  const normalized = tool.toLowerCase();
  return Object.entries(toolLogoMap).find(([key]) => matchesToolLogoKey(normalized, key))?.[1];
}

function getToolVisual(tool: string) {
  const normalized = tool.toLowerCase();
  return Object.entries(toolVisualMap).find(([key]) => normalized.includes(key))?.[1];
}

function getToolIcon(tool: string) {
  const normalized = tool.toLowerCase();
  if (normalized.includes('microcontroller') || normalized.includes('wireless')) return Cpu;
  if (normalized.includes('network')) return FolderKanban;
  if (normalized.includes('led') || normalized.includes('light')) return Lightbulb;
  if (normalized.includes('3d printer')) return Printer;
  if (normalized.includes('cnc')) return DraftingCompass;
  if (normalized.includes('laser')) return Scissors;
  if (normalized.includes('etch')) return Cpu;
  if (normalized.includes('circuit') || normalized.includes('electronics') || normalized.includes('sensor')) return Cpu;
  if (normalized.includes('camera') || normalized.includes('mobile')) return Film;
  if (normalized.includes('hand') || normalized.includes('power tool')) return Wrench;
  return PackageCheck;
}

function matchesToolLogoKey(normalizedTool: string, key: string) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escapedKey}([^a-z0-9]|$)`, 'i').test(normalizedTool);
}

function isWideToolLogo(tool: string) {
  const normalized = tool.toLowerCase();
  return normalized.includes('google workspace') || normalized.includes('our world in data') || normalized.includes('ml for kids') || normalized.includes('meta business') || normalized.includes('aia') || normalized.includes('biet') || normalized.includes('meu labs');
}

function getHeroPhoto(course: Course) {
  return courseHeroPhotos[course.slug] || '/assets/images/hero-robotics.jpg';
}

function shortProjectLabel(project: string, index: number) {
  if (project.startsWith('http')) return `Example Project ${index + 1}`;
  return project;
}

function splitPrerequisites(text: string) {
  return text
    .split(/\. (?=[A-Z])/)
    .map((item) => item.trim().replace(/\.$/, ''))
    .filter(Boolean);
}

function splitCourseStructure(text: string) {
  return text
    .split(/\. (?=[A-Z])/)
    .map((item) => item.trim().replace(/\.$/, ''))
    .filter(Boolean);
}

function getLocationPills(location: string) {
  const parts = location.split('/').map((item) => item.trim()).filter(Boolean);
  const hasColombo = parts.includes('Colombo 06');
  const inPerson = parts.find((item) => item === 'In Person' || item === 'In Person Only');
  const pills = parts.filter((item) => item !== 'Colombo 06' && item !== inPerson);

  if (inPerson && hasColombo) {
    pills.push(`${inPerson} • Colombo 06`);
  } else {
    if (inPerson) pills.push(inPerson);
    if (hasColombo) pills.push('Colombo 06');
  }

  return pills;
}

function getFocusTheme(area: string) {
  const normalized = area.toLowerCase();
  if (normalized.includes('mechanical design') || normalized.includes('mechanical cad')) return { Icon: Cuboid, colors: focusThemeClasses.mechanicalCad };
  if (normalized.includes('digital manufacturing') || normalized.includes('fabrication')) return { Icon: Printer, colors: focusThemeClasses.digitalFabrication };
  if (normalized.includes('robotics') || normalized.includes('actuators')) return { Icon: Radar, colors: focusThemeClasses.roboticsActuators };
  if (normalized.includes('mechanisms') || normalized.includes('motion & control')) return { Icon: Cog, colors: focusThemeClasses.mechanismsControl };
  if (normalized.includes('engineering testing') || normalized.includes('iteration')) return { Icon: ClipboardCheck, colors: focusThemeClasses.engineeringTesting };
  if (normalized.includes('capstone robot') || normalized.includes('robot build')) return { Icon: PackageCheck, colors: focusThemeClasses.robotCapstone };
  if (normalized.includes('brand strategy') || normalized.includes('audience research')) return { Icon: Target, colors: focusThemeClasses.brandResearch };
  if (normalized.includes('content creation') || normalized.includes('copywriting')) return { Icon: PencilLine, colors: focusThemeClasses.contentCopy };
  if (normalized.includes('social media marketing')) return { Icon: MessageCircle, colors: focusThemeClasses.socialMarketing };
  if (normalized.includes('seo') || normalized.includes('digital presence') || normalized.includes('websites')) return { Icon: MonitorUp, colors: focusThemeClasses.seoPresence };
  if (normalized.includes('campaign analytics') || normalized.includes('performance tracking')) return { Icon: ChartNoAxesCombined, colors: focusThemeClasses.campaignAnalytics };
  if (normalized.includes('advertising') || normalized.includes('email marketing') || normalized.includes('capstone campaign')) return { Icon: Megaphone, colors: focusThemeClasses.advertisingCampaign };
  if (normalized.includes('storyboarding') || normalized.includes('visual planning')) return { Icon: PencilLine, colors: focusThemeClasses.storyboardPlanning };
  if (normalized.includes('stop motion')) return { Icon: Camera, colors: focusThemeClasses.stopMotion };
  if (normalized.includes('2d animation') || normalized.includes('motion graphics')) return { Icon: Film, colors: focusThemeClasses.twoDAnimation };
  if (normalized.includes('3d animation') || normalized.includes('blender workflows')) return { Icon: Cuboid, colors: focusThemeClasses.threeDAnimation };
  if (normalized.includes('vfx') || normalized.includes('compositing')) return { Icon: Scissors, colors: focusThemeClasses.vfxCompositing };
  if (normalized.includes('foley') || normalized.includes('sound design') || normalized.includes('final post-production')) return { Icon: AudioWaveform, colors: focusThemeClasses.soundPost };
  if (normalized.includes('university & course') || normalized.includes('course selection')) return { Icon: University, colors: focusThemeClasses.universitySelection };
  if (normalized.includes('scholarship research') || normalized.includes('application planning')) return { Icon: Search, colors: focusThemeClasses.scholarshipPlanning };
  if (normalized.includes('personal statement') || normalized.includes('essay support')) return { Icon: FilePenLine, colors: focusThemeClasses.essaySupport };
  if (normalized.includes('portfolio & project') || normalized.includes('project documentation')) return { Icon: FolderSearch, colors: focusThemeClasses.portfolioDocumentation };
  if (normalized.includes('interview preparation') || normalized.includes('interview') && normalized.includes('communication')) return { Icon: MessagesSquare, colors: focusThemeClasses.interviewCommunication };
  if (normalized.includes('study-abroad partner') || normalized.includes('partner guidance')) return { Icon: GraduationCap, colors: focusThemeClasses.partnerGuidance };
  if (normalized.includes('industry simulation') || normalized.includes('professional roles')) return { Icon: BriefcaseBusiness, colors: focusThemeClasses.industryRoles };
  if (normalized.includes('scrum') || normalized.includes('kanban')) return { Icon: Kanban, colors: focusThemeClasses.scrumKanban };
  if (normalized.includes('software / product') || normalized.includes('r&d project work')) return { Icon: CodeXml, colors: focusThemeClasses.projectWork };
  if (normalized.includes('business analysis') || normalized.includes('qa') || normalized.includes('technical documentation')) return { Icon: ClipboardList, colors: focusThemeClasses.businessQaDocs };
  if (normalized.includes('performance reviews') || normalized.includes('professional feedback')) return { Icon: ClipboardCheck, colors: focusThemeClasses.performanceFeedback };
  if (normalized.includes('internship readiness') || normalized.includes('industry partner matching')) return { Icon: UserRoundCheck, colors: focusThemeClasses.internshipMatching };
  if (normalized.includes('problem discovery') || normalized.includes('customer research')) return { Icon: Search, colors: focusThemeClasses.problemDiscovery };
  if (normalized.includes('product ideation') || normalized.includes('mvp development')) return { Icon: Lightbulb, colors: focusThemeClasses.productIdeation };
  if (normalized.includes('business models') || normalized.includes('go-to-market strategy')) return { Icon: ChartNoAxesCombined, colors: focusThemeClasses.businessModel };
  if (normalized.includes('branding, marketing') || normalized.includes('marketing & storytelling')) return { Icon: Palette, colors: focusThemeClasses.brandingStory };
  if (normalized.includes('pitch decks') || normalized.includes('investor communication')) return { Icon: PenTool, colors: focusThemeClasses.investorPitch };
  if (normalized.includes('demo day') || normalized.includes('founder mentorship')) return { Icon: Users, colors: focusThemeClasses.founderMentorship };
  if (normalized.includes('game design') || normalized.includes('mechanics')) return { Icon: Dices, colors: focusThemeClasses.gameDesign };
  if (normalized.includes('gameplay systems')) return { Icon: Joystick, colors: focusThemeClasses.gameplay };
  if (normalized.includes('level design') || normalized.includes('world building')) return { Icon: Map, colors: focusThemeClasses.levelWorld };
  if (normalized.includes('characters') || normalized.includes('visual design')) return { Icon: Blocks, colors: focusThemeClasses.characterStory };
  if (normalized.includes('physics') || normalized.includes('collision') || normalized.includes('game logic')) return { Icon: Atom, colors: focusThemeClasses.gamePhysics };
  if (normalized.includes('playtesting') || normalized.includes('publishing')) return { Icon: BugPlay, colors: focusThemeClasses.playtesting };
  if (normalized.includes('esp32') || normalized.includes('wireless communication')) return { Icon: RadioTower, colors: focusThemeClasses.espWireless };
  if (normalized.includes('stm32') || normalized.includes('precision control')) return { Icon: Microchip, colors: focusThemeClasses.stmControl };
  if (normalized.includes('raspberry pi') || normalized.includes('edge computing')) return { Icon: SatelliteDish, colors: focusThemeClasses.edgeCompute };
  if (normalized.includes('tinyml') || normalized.includes('edge ai')) return { Icon: BrainCircuit, colors: focusThemeClasses.tinyMl };
  if (normalized.includes('system integration') || normalized.includes('engineering capstone')) return { Icon: Workflow, colors: focusThemeClasses.embeddedIntegration };
  if (normalized.includes('circuit fundamentals') || normalized.includes('measurement')) return { Icon: Activity, colors: focusThemeClasses.circuitMeasurement };
  if (normalized.includes('analog electronics') || normalized.includes('signal conditioning')) return { Icon: AudioWaveform, colors: focusThemeClasses.analogSignal };
  if (normalized.includes('power electronics') || normalized.includes('energy systems')) return { Icon: BatteryCharging, colors: focusThemeClasses.powerEnergy };
  if (normalized.includes('sensors') || normalized.includes('instrumentation') || normalized.includes('mixed signals')) return { Icon: Zap, colors: focusThemeClasses.sensorsInstrumentation };
  if (normalized.includes('motors') || normalized.includes('electrical safety') || normalized.includes('grid concepts')) return { Icon: Cable, colors: focusThemeClasses.motorsGrid };
  if (normalized.includes('capstone hardware') || normalized.includes('hardware system development')) return { Icon: CircuitBoard, colors: focusThemeClasses.hardwareCapstone };
  if (normalized.includes('digital safety') || normalized.includes('cyber ethics')) return { Icon: Fingerprint, colors: focusThemeClasses.cyberEthics };
  if (normalized.includes('networks') || (normalized.includes('systems') && normalized.includes('security fundamentals'))) return { Icon: ChartNoAxesCombined, colors: focusThemeClasses.cyberNetworks };
  if (normalized.includes('cryptography') || normalized.includes('secure communication')) return { Icon: KeyRound, colors: focusThemeClasses.cyberCrypto };
  if (normalized.includes('web security') || normalized.includes('application protection')) return { Icon: EarthLock, colors: focusThemeClasses.cyberWeb };
  if (normalized.includes('threat detection') || normalized.includes('incident response')) return { Icon: Radar, colors: focusThemeClasses.cyberThreat };
  if (normalized.includes('cyber security capstone')) return { Icon: ShieldAlert, colors: focusThemeClasses.cyberCapstone };
  if (normalized.includes('foundations of data science')) return { Icon: Database, colors: focusThemeClasses.dataScience };
  if (normalized.includes('data engineering') || normalized.includes('visualization') || normalized.includes('visualisation')) return { Icon: ChartNoAxesCombined, colors: focusThemeClasses.visualization };
  if (normalized.includes('machine learning')) return { Icon: BrainCircuit, colors: focusThemeClasses.machineLearning };
  if (normalized.includes('responsible ai') || normalized.includes('decision systems')) return { Icon: Scale, colors: focusThemeClasses.responsibleAi };
  if (normalized.includes('deep learning') || normalized.includes('computer vision')) return { Icon: ScanEye, colors: focusThemeClasses.computerVision };
  if (normalized.includes('generative ai') || normalized.includes('large language model') || normalized.includes('llm')) return { Icon: BotMessageSquare, colors: focusThemeClasses.generativeAi };
  if (normalized.includes('sketch') || normalized.includes('mood board') || normalized.includes('visualisation') || normalized.includes('visualization')) return { Icon: PencilLine, colors: focusThemeClasses.design };
  if (normalized.includes('photography') || normalized.includes('camera')) return { Icon: Camera, colors: focusThemeClasses.creative };
  if (normalized.includes('digital drawing') || normalized.includes('creative artwork')) return { Icon: Palette, colors: focusThemeClasses.creative };
  if (normalized.includes('acting') || normalized.includes('public speaking') || normalized.includes('performance')) return { Icon: Megaphone, colors: focusThemeClasses.strategy };
  if (normalized.includes('video editing') || normalized.includes('post production') || normalized.includes('post-production')) return { Icon: Scissors, colors: focusThemeClasses.professional };
  if (normalized.includes('strategy') || normalized.includes('team') || normalized.includes('decision') || normalized.includes('communication') || normalized.includes('presentation') || normalized.includes('public speaking')) return { Icon: Handshake, colors: focusThemeClasses.strategy };
  if (normalized.includes('reverse engineering')) return { Icon: PackageSearch, colors: focusThemeClasses.discovery };
  if (normalized.includes('pitch') || normalized.includes('branding')) return { Icon: Presentation, colors: focusThemeClasses.professional };
  if (normalized.includes('circuit') || normalized.includes('sensor') || normalized.includes('iot') || normalized.includes('embedded') || normalized.includes('wireless') || normalized.includes('electronics') || normalized.includes('pcb') || normalized.includes('power')) return { Icon: Cpu, colors: focusThemeClasses.electronics };
  if (normalized.includes('hands-on') || normalized.includes('making') || normalized.includes('motor') || normalized.includes('led') || normalized.includes('fabrication') || normalized.includes('manufacturing')) return { Icon: Wrench, colors: focusThemeClasses.handsOn };
  if (normalized.includes('no-code')) return { Icon: Sparkles, colors: focusThemeClasses.handsOn };
  if (normalized.includes('programming fundamentals')) return { Icon: Braces, colors: focusThemeClasses.code };
  if (normalized.includes('frontend') || normalized.includes('ui/ux')) return { Icon: AppWindow, colors: focusThemeClasses.interface };
  if (normalized.includes('backend') || normalized.includes('databases')) return { Icon: Server, colors: focusThemeClasses.backend };
  if (normalized.includes('software project management')) return { Icon: FolderKanban, colors: focusThemeClasses.project };
  if (normalized.includes('full-stack') || normalized.includes('capstone development')) return { Icon: Rocket, colors: focusThemeClasses.professional };
  if (normalized.includes('scratchjr') || normalized.includes('scratch')) return { Icon: Bot, colors: focusThemeClasses.coding };
  if (normalized.includes('coding') || normalized.includes('programming') || normalized.includes('game') || normalized.includes('software') || normalized.includes('frontend') || normalized.includes('backend') || normalized.includes('api')) return { Icon: Gamepad2, colors: focusThemeClasses.coding };
  if (normalized.includes('3d') || normalized.includes('cad') || normalized.includes('design') || normalized.includes('product') || normalized.includes('prototype') || normalized.includes('mechanism')) return { Icon: DraftingCompass, colors: focusThemeClasses.design };
  if (normalized.includes('creative play')) return { Icon: Sparkles, colors: focusThemeClasses.creative };
  if (normalized.includes('story') || normalized.includes('media') || normalized.includes('video') || normalized.includes('film') || normalized.includes('animation') || normalized.includes('photography') || normalized.includes('content') || normalized.includes('drawing')) return { Icon: Film, colors: focusThemeClasses.creative };
  if (normalized.includes('data') || normalized.includes('dashboard') || normalized.includes('analytics') || normalized.includes('sql') || normalized.includes('machine learning') || normalized.includes('ai') || normalized.includes('computer vision')) return { Icon: Database, colors: focusThemeClasses.data };
  if (normalized.includes('security') || normalized.includes('cyber') || normalized.includes('safety') || normalized.includes('cryptography')) return { Icon: ShieldCheck, colors: focusThemeClasses.safety };
  if (normalized.includes('marketing') || normalized.includes('campaign') || normalized.includes('brand') || normalized.includes('audience')) return { Icon: Target, colors: focusThemeClasses.professional };
  if (normalized.includes('portfolio') || normalized.includes('application') || normalized.includes('interview') || normalized.includes('university') || normalized.includes('scholarship')) return { Icon: Presentation, colors: focusThemeClasses.professional };
  if (normalized.includes('industry') || normalized.includes('professional') || normalized.includes('venture') || normalized.includes('pitch') || normalized.includes('founder') || normalized.includes('business')) return { Icon: Trophy, colors: focusThemeClasses.professional };
  if (normalized.includes('computer literacy') || normalized.includes('digital confidence')) return { Icon: MonitorUp, colors: focusThemeClasses.coding };
  return { Icon: Rocket, colors: focusThemeClasses.professional };
}

function getOutcomeTitle(outcome: string) {
  const normalized = outcome.toLowerCase();
  if (normalized.includes('rules') || normalized.includes('player choices') || normalized.includes('feedback loops')) return 'Game Design';
  if (normalized.includes('playable') || normalized.includes('gameplay')) return 'Gameplay Programming';
  if (normalized.includes('characters') || normalized.includes('environments') || normalized.includes('levels')) return 'Level & Character Design';
  if (normalized.includes('physics') || normalized.includes('collision') || normalized.includes('scoring')) return 'Game Systems';
  if (normalized.includes('playtesting') || normalized.includes('balancing')) return 'Playtesting & Iteration';
  if (normalized.includes('capstone') || normalized.includes('playable demo')) return 'Capstone Project';
  if (normalized.includes('clean') || normalized.includes('maintainable')) return 'Clean Code';
  if (normalized.includes('frontend') || normalized.includes('responsive') || normalized.includes('interface')) return 'Frontend Development';
  if (normalized.includes('backend') || normalized.includes('database') || normalized.includes('api')) return 'Backend & Databases';
  if (normalized.includes('full-stack') || normalized.includes('end-to-end')) return 'Full-Stack Systems';
  if (normalized.includes('debugging') || normalized.includes('testing') || normalized.includes('optimization')) return 'Debugging & Testing';
  if (normalized.includes('3d') || normalized.includes('cad')) return '3D Design';
  if (normalized.includes('program') || normalized.includes('coding') || normalized.includes('automation')) return 'Coding & Automation';
  if (normalized.includes('data') || normalized.includes('decisions')) return 'Strategy & Decisions';
  if (normalized.includes('video') || normalized.includes('storytelling') || normalized.includes('animation')) return 'Digital Storytelling';
  if (normalized.includes('teamwork') || normalized.includes('collaborate')) return 'Teamwork';
  if (normalized.includes('prototype') || normalized.includes('electronics') || normalized.includes('microcontrollers')) return 'Prototype Building';
  return outcome.split(' ').slice(0, 3).join(' ');
}

export default function CoursePage({ params }: PageProps) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const pageTitle = getPageTitle(course);
  const courseIntakes = intakes.filter((batch) => batch.courseSlug === course.slug);
  const recommended = course.recommendedCourses.map(getCourse).filter(Boolean).slice(0, 4);
  const closingDays = daysToNextClosingDate();
  const heroPhoto = getHeroPhoto(course);
  const prerequisites = splitPrerequisites(course.prerequisites);
  const courseStructure = splitCourseStructure(course.courseStructure);
  const primaryCtaLabel = course.comingSoon ? 'Join Waitlist' : 'Register Now';

  return (
    <main className="bg-[#F8F1E3]">
      <section className="relative bg-creamAlt pb-0 pt-0 text-navy">
        <div className="mx-auto w-full">
          <div className="relative bg-[#06243A] shadow-[0_22px_60px_rgba(13,53,87,0.18)]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_36%,rgba(255,122,0,0.22),transparent_30%),linear-gradient(135deg,#061C31_0%,#092D4B_46%,#052038_100%)]" />
              <div
                className="absolute inset-y-0 right-0 w-full sm:w-[76%] lg:w-[64%]"
                style={{
                  WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 24%, rgba(0,0,0,0.34) 45%, #000 68%)',
                  maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 24%, rgba(0,0,0,0.34) 45%, #000 68%)'
                }}
              >
                <Image
                  src={heroPhoto}
                  alt=""
                  fill
                  priority
                  className="object-cover object-right"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,26,45,0.04)_0%,rgba(3,26,45,0.22)_100%)]" />
              </div>
              <div className="absolute inset-y-0 left-0 w-[60%] bg-[linear-gradient(90deg,rgba(3,26,45,0.34)_0%,rgba(3,26,45,0)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[92rem] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
              <Reveal className="flex max-w-3xl flex-col justify-center text-white" animation="rise">
                <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
                  <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{course.subtitle}</p>
                </div>
                <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] tracking-normal md:text-6xl">{pageTitle}</h1>
                <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-white/88">{course.descriptor}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-extrabold lg:flex-nowrap">
                  {[
                    { label: 'Age', value: course.ageRange, Icon: Users },
                    { label: 'Duration', value: course.duration, Icon: Clock },
                    { label: 'Format', value: formatCourseFormat(course.format), Icon: CalendarDays },
                    { label: 'Pathway Stage', value: formatPathwayStage(course.pathwayStage), Icon: ShieldCheck }
                  ].map(({ label, value, Icon }) => (
                    <div key={label} className="flex min-w-fit items-center gap-2.5">
                      <Icon size={19} className="shrink-0 text-orange" aria-hidden />
                      <span>
                        <span className="block text-[11px] uppercase tracking-[0.08em] text-white/58">{label}</span>
                        <span className="block whitespace-pre-line text-[15px] leading-5 text-white">{value}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href={course.registerLink} target="_blank" rel="noreferrer" className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-8 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(255,79,31,0.22)] transition hover:-translate-y-0.5 hover:shadow-pop">
                    {primaryCtaLabel}
                  </a>
                  <a href={whatsappHref(counselorMessage(course.title))} target="_blank" rel="noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/55 bg-white/8 px-8 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-white hover:text-navy">
                    <MessageCircle size={17} /> Talk to a Student Counselor
                  </a>
                </div>
              </Reveal>
              <div aria-hidden="true" className="hidden lg:block" />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFEBD1_0%,#FFF4E4_58%,#FFF8EF_100%)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <Reveal className="mb-7 border-l-4 border-orange pl-5">
            <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Focus Areas</p>
          </Reveal>
          <div className={`grid gap-4 md:grid-cols-3 ${course.focusAreas.length > 5 ? 'xl:grid-cols-6' : 'xl:grid-cols-5'}`}>
            {course.focusAreas.map((area, index) => {
              const { Icon, colors } = getFocusTheme(area);
              const compactFocusCard = course.focusAreas.length > 5;
              return (
                <Reveal key={area} animation="pop" delay={index * 70} className="h-full">
                  <article className={`flex flex-col items-center justify-center rounded-[8px] border text-center shadow-[0_14px_30px_rgba(13,53,87,0.07)] ${compactFocusCard ? 'min-h-[176px] p-5' : 'min-h-[210px] p-7'} ${colors.card}`}>
                    <span className={`grid place-items-center rounded-2xl text-white ${compactFocusCard ? 'mb-4 h-14 w-14' : 'mb-5 h-16 w-16'} ${colors.icon}`}>
                      <Icon size={compactFocusCard ? 30 : 34} strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className={`${compactFocusCard ? 'text-base' : 'text-lg'} font-extrabold leading-tight text-navy`}>{area}</h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[92rem] gap-6 lg:grid-cols-[1.15fr_0.95fr]">
          <Reveal animation="rise" className="h-full">
          <article className="flex h-full min-h-[790px] flex-col rounded-[10px] border border-navy/10 bg-white p-8 shadow-[0_14px_34px_rgba(13,53,87,0.07)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">What You Will Learn</h2>
            </div>
            <div className="mt-10 divide-y divide-navy/10">
              {course.learningOutcomes.map((outcome, index) => {
                const Icon = outcomeIcons[index % outcomeIcons.length];
                const badgeClass = outcomeBadgeClasses[index % outcomeBadgeClasses.length];
                return (
                  <div key={outcome} className="grid gap-5 py-6 first:pt-0 sm:grid-cols-[64px_1fr]">
                    <span className={`grid h-14 w-14 place-items-center rounded-full text-white ${badgeClass}`}>
                      <Icon size={26} strokeWidth={2.1} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold leading-tight text-navy">{getOutcomeTitle(outcome)}</h3>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{outcome}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          </Reveal>

          <Reveal animation="rise" delay={100} className="h-full">
          <div className="grid h-full gap-5">
            <article className="flex min-h-[430px] flex-col rounded-[10px] border border-navy/10 bg-white p-8 shadow-[0_14px_34px_rgba(13,53,87,0.07)]">
              <div className="border-l-4 border-orange pl-4">
                <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Tools You Will Use</h2>
              </div>
              <div className="mt-8 grid flex-1 auto-rows-[145px] content-start grid-cols-2 gap-3 sm:grid-cols-3">
                {course.toolsUsed.map((tool) => {
                  const logo = getToolLogo(tool);
                  const visual = getToolVisual(tool);
                  const ToolIcon = getToolIcon(tool);
                  const wideLogo = isWideToolLogo(tool);
                  return (
                    <div
                      key={tool}
                      className="grid min-h-[145px] place-items-center overflow-hidden rounded-[8px] border border-navy/10 bg-white p-4 text-center shadow-[0_8px_18px_rgba(13,53,87,0.04)]"
                    >
                      {logo ? (
                        <Image
                          src={logo}
                          alt=""
                          width={wideLogo ? 160 : 112}
                          height={wideLogo ? 56 : 72}
                          className={`${wideLogo ? 'mb-4 h-14 w-40' : 'mb-3 max-h-20 w-28'} object-contain`}
                        />
                      ) : visual ? (
                        <Image
                          src={visual}
                          alt=""
                          width={132}
                          height={84}
                          className="mb-3 h-20 w-32 object-contain"
                        />
                      ) : (
                        <span className="mb-3 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white shadow-[0_12px_24px_rgba(255,122,0,0.22)]">
                          <ToolIcon size={34} strokeWidth={2} aria-hidden />
                        </span>
                      )}
                      <span className="text-xs font-extrabold leading-tight text-navy">{tool}</span>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[10px] border border-orange/20 bg-white p-7 shadow-[0_18px_42px_rgba(255,122,0,0.13)]">
              <div className="border-l-4 border-orange pl-4">
                <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Prerequisites</h2>
              </div>
              <div className="mt-6 grid gap-4">
                {(prerequisites.length ? prerequisites : [course.prerequisites]).map((item) => (
                  <p key={item} className="flex gap-4 text-sm font-bold leading-6 text-navy">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] shadow-[0_8px_18px_rgba(255,93,25,0.28)]">
                      <CheckCircle2 size={16} className="text-white" aria-hidden />
                    </span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </article>
          </div>
          </Reveal>
        </div>

        <Reveal animation="rise" className="mx-auto mt-6 max-w-[92rem]">
          <article className="rounded-[10px] border border-navy/10 bg-white p-7 shadow-[0_14px_34px_rgba(13,53,87,0.07)] md:p-8">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Course Structure</h2>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {(courseStructure.length ? courseStructure : [course.courseStructure]).map((item, index) => {
                const Icon = structureIcons[index % structureIcons.length];
                const badgeClass = structureBadgeClasses[index % structureBadgeClasses.length];
                return (
                  <div key={item} className="flex min-h-[150px] gap-4 rounded-[8px] border border-navy/10 bg-creamAlt p-5 shadow-[0_10px_22px_rgba(13,53,87,0.05)]">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white ${badgeClass}`}>
                      <Icon size={21} strokeWidth={2.1} aria-hidden />
                    </span>
                    <p className="text-sm font-bold leading-6 text-navy">{item}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </Reveal>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal animation="rise" className="h-full">
          <article className="h-full rounded-[10px] border border-orange/15 bg-white p-7 shadow-[0_18px_42px_rgba(13,53,87,0.08)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Example Projects</h2>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(course.exampleProjects.length ? course.exampleProjects : ['Project details coming soon']).slice(0, 4).map((project, index) => (
                <a key={project} href={project.startsWith('http') ? project : '#'} target={project.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group overflow-hidden rounded-[8px] border border-navy/10 bg-white shadow-[0_10px_24px_rgba(13,53,87,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(13,53,87,0.12)]">
                  <div className="relative h-36 bg-creamAlt">
                    <Image src={projectImages[index % projectImages.length]} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 18vw, 45vw" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/45 to-transparent" />
                  </div>
                  <div className="flex min-h-[64px] flex-col items-start justify-center gap-2 p-4">
                    <span className="text-sm font-extrabold leading-tight text-navy">{shortProjectLabel(project, index)}</span>
                    <span className="text-xs font-black text-orange">
                      View Project <span aria-hidden>&gt;</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </article>
          </Reveal>

          <Reveal animation="rise" delay={100} className="h-full">
          <article id="request-syllabus" className="flex h-full min-h-[645px] flex-col rounded-[10px] border border-orange/20 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF8EF_52%,#FFECD5_100%)] p-5 shadow-[0_18px_42px_rgba(255,122,0,0.12)] md:p-7">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Request Full Syllabus</h2>
            </div>
            <p className="mt-5 max-w-xl text-sm font-bold leading-6 text-slate-700">Fill in your details and we will send the full syllabus to you.</p>
            <div className="mt-7">
              <SyllabusForm courseSlug={course.slug} />
            </div>
            <p className="mt-auto pt-8 text-xs font-bold text-slate-500">We respect your privacy. Your information is safe with us.</p>
          </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <Reveal animation="rise" className="mx-auto max-w-[92rem]">
          <article className="rounded-[10px] border border-orange/20 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF8EF_58%,#FFEBD1_100%)] p-7 shadow-[0_16px_34px_rgba(255,122,0,0.10)] md:p-8">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Payment Info</h2>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {paymentInfoItems.map(({ title, Icon }) => (
                <div key={title} className="flex min-h-[132px] flex-col rounded-[8px] border border-navy/10 bg-white p-4 shadow-[0_10px_22px_rgba(13,53,87,0.05)]">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white shadow-[0_10px_22px_rgba(255,122,0,0.22)]">
                      <Icon size={22} strokeWidth={2.4} aria-hidden />
                    </span>
                    <p className="text-sm font-bold leading-6 text-navy">{title}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs font-semibold leading-5 text-slate-500">*Free trial subject to seat availability.</p>
          </article>
        </Reveal>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFEBD1_0%,#FFF4E4_58%,#FFF8EF_100%)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.6fr_0.8fr]">
          <Reveal animation="rise" className="h-full">
          <article className="h-full rounded-[10px] border border-navy/10 bg-white p-6 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{currentMonthName()} Intake Now Open</h2>
            </div>
            <p className="mt-1 text-sm font-extrabold text-orange">Registration closes in {closingDays} days</p>
            {course.comingSoon ? (
              <p className="mt-6 rounded-[8px] bg-cream p-4 text-sm font-extrabold text-navy">Intake details coming soon.</p>
            ) : (
              <div className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {courseIntakes.map((batch) => (
                  <div key={batch.label} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-navy">
                    <span className="flex items-center gap-2"><Clock size={16} className="text-slate-500" /> {batch.label}</span>
                    <span className="font-extrabold text-orange">{seededSpots(course.slug, batch.label)} spots left</span>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
                {getLocationPills(course.location).map((location) => (
                  <span key={location} className="inline-flex items-center gap-2 rounded-full bg-creamAlt px-4 py-2 text-sm font-extrabold text-navy">
                    <MapPin size={16} className="text-orange" /> {location}
                  </span>
                ))}
            </div>
          </article>
          </Reveal>

          <Reveal animation="rise" delay={100} className="h-full">
          <article className="flex h-full flex-col justify-center rounded-[10px] bg-gradient-to-br from-[#EEF7FF] to-white p-8 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <div className="border-l-4 border-orange pl-4">
              <h3 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-lg font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-xl">LIMITED SEATS, ENROLL NOW!</h3>
            </div>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">Our small batch sizes ensure personalised attention and the best learning experience for every student.</p>
            <a href={course.registerLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-7 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(255,93,25,0.22)] transition hover:-translate-y-0.5">
              {primaryCtaLabel}
            </a>
          </article>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-[92rem]">
          <div className="mb-5 border-l-4 border-orange pl-4">
            <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Other Recommended Courses</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommended.map((item) => item ? <CourseCard key={item.slug} course={item} /> : null)}
          </div>
          <div className="mt-10">
            <CounselorCTA courseName={course.title} source={`/courses/${course.slug}`} compact />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
