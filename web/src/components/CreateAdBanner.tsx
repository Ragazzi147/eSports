import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {

    return (
        <div className="pt-1 bg-gradient-to-r from-yellow-500 via-red-600 to-orange-500 self-stretch rounded-lg overflow-hidden mt-8">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                <div>
                    <strong className="text-2xr text-white font-black">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className="py-3 px-4 hover:bg-orange-500 text-white rounded flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}