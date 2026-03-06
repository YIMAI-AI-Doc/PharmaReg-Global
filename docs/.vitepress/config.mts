// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 关键：项目站点必须配置 base，和仓库名一致（前后加斜杠）
  base: '/PharmaReg-Global/',
  
  // 网站标题
  title: 'PharmaReg Global',
  
  // 多语言配置 (Locales)
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/', // 默认语言重定向到 /zh/ 目录
      description: '全球药品注册法规知识库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/getting-started' },
          { 
            text: '更多', 
            items: [
              { text: 'GitHub', link: 'https://github.com/YIMAI-AI-Doc/PharmaReg-Global' },
              { text: 'VitePress 官网', link: 'https://vitepress.dev/' }
            ]
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '入门指南',
              items: [
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '项目结构', link: '/zh/guide/project-structure' }
              ]
            }
          ],
          '/zh/nmpa/': [
            {
              text: 'NMPA',
              items: [
                { text: '概览', link: '/zh/nmpa/' },
                { text: '注册基础概览', link: '/zh/nmpa/registration-basics' }
              ]
            }
          ]
        },
        footer: {
          message: '内容以 CC BY 4.0 许可证授权',
          copyright: 'Copyright © 2026 YIMAI-AI-Doc'
        },
        // 本地搜索多语言配置
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/', // 显式声明 zh 语言包
      description: '全球药品注册法规知识库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/getting-started' },
          { 
            text: '更多', 
            items: [
              { text: 'GitHub', link: 'https://github.com/YIMAI-AI-Doc/PharmaReg-Global' },
              { text: 'VitePress 官网', link: 'https://vitepress.dev/' }
            ]
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '入门指南',
              items: [
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '项目结构', link: '/zh/guide/project-structure' }
              ]
            }
          ],
          '/zh/nmpa/': [
            {
              text: 'NMPA',
              items: [
                { text: '概览', link: '/zh/nmpa/' },
                { text: '注册基础概览', link: '/zh/nmpa/registration-basics' }
              ]
            }
          ]
        },
        footer: {
          message: '内容以 CC BY 4.0 许可证授权',
          copyright: 'Copyright © 2026 YIMAI-AI-Doc'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Global Pharmaceutical Regulatory Knowledge Base',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/getting-started' },
          { 
            text: 'More', 
            items: [
              { text: 'GitHub', link: 'https://github.com/YIMAI-AI-Doc/PharmaReg-Global' },
              { text: 'VitePress', link: 'https://vitepress.dev/' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Quick Start', link: '/en/guide/getting-started' },
                { text: 'Project Structure', link: '/en/guide/project-structure' }
              ]
            }
          ]
        },
        footer: {
          message: 'Licensed under CC BY 4.0',
          copyright: 'Copyright © 2026 YIMAI-AI-Doc'
        }
      }
    }
  },
  
  // 共享主题配置
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YIMAI-AI-Doc/PharmaReg-Global' }
    ],
    search: {
      provider: 'local'
    }
  }
})
