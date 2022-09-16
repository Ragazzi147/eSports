interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
  }
  
  export function GameBanner(props: GameBannerProps) {
    return (
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrl} alt="" />
  
        <div className='w-full pt-2 pb-52 px-2 bg-gradient-to-r  absolute bottom-0 right-0 left-0'>
          
          <span className='text-sky-200 text-sm block'></span>
        </div>
      </a>
    )
  }