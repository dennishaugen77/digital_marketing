import search from '@/assets/icons/svg/search.svg'
import { cn } from '@/utils/cn';
import { useEffect, useRef, useState } from 'react';


export const SearchBar = () => {
	const [isSpread, setSpread] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (isSpread && containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setSpread(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isSpread]);

	return (
		<div>
			<div ref={containerRef} className='relative flex items-center w-56'>
				<input
					placeholder='Search'
					className={cn('overflow-hidden py-3 rounded-xs bg-white text-gray-300 outline-0 ml-auto transition-[width,padding] duration-600 ease-in-out', isSpread ? 'w-56 pl-5 pr-8' : 'w-0 pl-0 pr-0')}
				/>
				<img src={search} width={20} className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2' onClick={() => setSpread(!isSpread)}/>
			</div>
		</div>
	)
}