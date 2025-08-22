import { useTheme } from '@/provider/ThemeProvider'
import { useEffect, useMemo, useState } from 'react'

export const CustomizerDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {themeMode, switchTheme} = useTheme();
    const close = () => setIsOpen(false)
    const open = () => setIsOpen(true)

    // Close on Escape
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close()
            }
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    const palettes: Array<{key: string, colors: string[]}> = useMemo(() => [
        {
            key: 'green',
            colors: ['rgb(55, 146, 55)', 'rgb(84, 180, 53)'],
        },
         {
            key: 'red',
            colors:  ['rgb(204, 25, 57)', 'rgb(221, 24, 59)'],
         },
         {
            key: 'choco',
            colors: ['rgb(233, 140, 0)', 'rgb(253, 152, 0)'],
         },
         {
            key: 'peru',
            colors: ['rgb(208, 154, 64)', 'rgb(220, 165, 74)'], 
         },
         {
            key: 'seagreen',
            colors: ['rgb(23, 142, 121)', 'rgb(27, 156, 133)'],
         },
        {
            key: 'orangred',
            colors: ['rgb(241, 88, 8)', 'rgb(255, 98, 16)'], 
        },
         {
            key: 'pink',
            colors: ['rgb(234, 85, 157)', 'rgb(251, 95, 171)'], 
         },
        {
            key: 'indigo',
            colors: ['rgb(85, 17, 248)', 'rgb(101, 40, 247)'], 
        }        
    ], [])

    const DrawerHeader = () => (
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4  shadow-sm">
            <div className="text-gray-800 text-lg font-semibold">Digital Marketing Agency</div>
            <button aria-label="Close" onClick={close} className="text-gray-500 hover:text-gray-700">
                ×
            </button>
        </div>
    )

    const SectionTitle = ({ title }: { title: string }) => (
        <div className="text-gray-700 font-semibold text-sm mb-3">{title}</div>
    )

    const FontSamples = () => (
        <div className="grid grid-cols-5 gap-3">
            {['Aa', 'Aa', 'Aa', 'Aa', 'Aa'].map((label, idx) => (
                <button key={idx} className="h-10 rounded-md border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 flex items-center justify-center">
                    <span className="select-none">{label}</span>
                </button>
            ))}
        </div>
    )

    const ColorPalettes = () => (
        <div className="grid grid-cols-4 gap-3">
            {palettes.map((p, idx) => (
                <button key={idx} onClick={() => switchTheme(p.key)} className="h-10 rounded-md border border-gray-300 hover:border-gray-400 hover:bg-gray-50 px-2 flex items-center justify-center gap-2">
                    {p.colors.map((c, i) => (
                        <span key={i} className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                </button>
            ))}
        </div>
    )

    return (
        <> 
            <button
                onClick={open}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 !bg-primary text-white shadow-lg rounded-l-md px-3 py-3 hover:opacity-90"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M2.25 3a.75.75 0 000 1.5h1.799l.64 3.203 1.28 6.401A2.25 2.25 0 008.176 16.5h8.574a2.25 2.25 0 002.2-1.746l1.318-5.93a.75.75 0 00-.731-.924H6.42l-.35-1.75A1.5 1.5 0 004.595 3H2.25zM9 20.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
            </button>

            {isOpen && (
                <div onClick={close} className="fixed inset-0 z-40 bg-black/40" />
            )}

            <aside
                className={`fixed inset-y-0 right-0 z-50 w-[360px] bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <DrawerHeader />
                <div className="h-full overflow-y-auto px-5 pb-24 pt-4">
                    <p className="text-sm text-gray-600 mb-6 text-start">
                        Use the template as-is or try different colors and fonts from the options below.
                    </p>

                    <SectionTitle title="Try Other Fonts" />
                    <FontSamples />

                    <div className="my-6" />

                    <SectionTitle title="Try Other Colors" />
                    <ColorPalettes />
                </div>

                {/* Footer CTA */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-5 bg-white">
                    <button className="w-full !bg-primary text-white rounded-md h-12 font-semibold shadow hover:opacity-90">Buy Now</button>
                    <button className="mt-3 w-full h-12 flex items-center justify-center hover:!bg-primary hover:text-white rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Learn how to use this template
                    </button>
                </div>
            </aside>
        </>
    )
} 