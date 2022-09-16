import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import { useEffect, useState } from 'react';
import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/input';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])



  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-gradient-to-r from-orange-500 via-red-600 to-gray-1000 bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads} />
          )
        })}

      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#222222] py-8 px-10 text-sky-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            
            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <Input id='game' placeholder='Selecione o game que deseja jogar' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id='name' placeholder='Como te chamam dentro do game?' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input id='discord' placeholder='Usuário#0000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500'
                      title='Domingo'>D</button>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500'
                      title='Segunda'>S</button>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500' title='Terça'>T</button>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500'
                      title='Quarta'>Q</button>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500'
                      title='Quinta'>Q</button>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500' title='Sexta'>S</button>
                    <button
                      className='w-8 h-8 rounded bg-gradient-to-r hover:from-orange-500'
                      title='Sábado'>S</button>
                  </div>
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hoursStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input id='hoursStart' type="time" placeholder='De' />
                    <Input id='hoursEnd' type="time" placeholder='Até' />
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <Input type="checkbox" id="useVoiceChannel" /> Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close
                  type='button'
                  className=' px-5 h-12 rounded-md font-semibold hover:bg-gradient-to-r from-red-600 via-orange-600 to-orange-500'>
                  Cancelar
                </Dialog.Close>
                <button
                  type='submit'
                  className=' px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-gradient-to-r from-orange-500 via-red-500 to-red-600'>
                  <GameController className='w-6 h-6' />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>            
)}

export default App