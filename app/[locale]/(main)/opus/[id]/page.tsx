'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { notFound, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface OpusItem {
  id: number
  title: string
  description: string
  imageUrl: string
  category: string
  fullDescription?: string
  technologies?: string[]
  team?: string[]
  date?: string
}

interface Props {
  params: {
    id: string
  }
}

export default function OpusDetail({ params }: Props) {
  const router = useRouter()
  
  // 模拟数据获取
  const opusData: OpusItem[] = [
    {
      id: 1,
      title: "卡牌游戏",
      description: "玩家可以在游戏中收集卡牌、升级角色、与其他玩家战斗。",
      imageUrl: "https://th.bing.com/th/id/R.52f5b9a639dc7e74b4cd53debfd4399d?rik=UfbFEnp9vwKPlQ&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fwater%2ftext%2f2019%2f02-12%2fwater_61235_698_1019.65_.png&ehk=iIcaD2%2fr5%2bBzMqUqMFN6GUXUwkPRmwNIt3RnVSqDf9Q%3d&risl=&pid=ImgRaw&r=0",
      category: "项目",
      fullDescription: "这是项目1的详细描述，包含了更多关于项目的信息。这个项目致力于解决...",
      technologies: ["python"],
      team: ["孙铭泽"],
      date: "2025-01-15"
    },
    // 可以添加更多作品
  ]

  const opus = opusData.find(item => item.id === parseInt(params.id))

  if (!opus) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <motion.button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
{useTranslations()('返回')}
        </motion.button>
        {/* 作品标题 */}
        <h1 className="text-3xl font-bold mb-6">{opus.title}</h1>

        {/* 主图展示 */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={opus.imageUrl}
            alt={opus.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* 项目信息 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">{useTranslations()('类别')}</h2>
            <p className="text-gray-600">{opus.category}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{useTranslations()('完成日期')}</h2>
            <p className="text-gray-600">{opus.date}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{useTranslations()('团队成员')}</h2>
            <div className="flex flex-wrap gap-2">
              {opus.team?.map((member, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 详细描述 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{useTranslations()('项目描述')}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {opus.fullDescription}
          </p>
        </div>

        {/* 技术栈 */}
        {opus.technologies && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{useTranslations()('使用技术')}</h2>
            <div className="flex flex-wrap gap-3">
              {opus.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}