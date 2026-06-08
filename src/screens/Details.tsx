import { Star, Square, Triangle, CheckCircle, AlertCircle, Camera, ChevronRight, MapPinned, Car } from 'lucide-react';

interface DetailsProps {
  placeId: number;
  onNavigate?: (tab: 'home' | 'details' | 'form' | 'ranking', placeId?: number) => void;
}

const placesData: Record<number, any> = {
  1: {
    name: 'Museu Oscar Niemeyer (MON)',
    points: 92,
    type: 'Platina',
    color: 'text-platina',
    bg: 'bg-platina/10',
    border: 'border-platina',
    Icon: Star,
    specs: [
      { id: 1, title: 'Portas', desc: 'Vão livre medido de 0,90m', status: 'Aprovado', success: true },
      { id: 2, title: 'Rampas', desc: 'Inclinação de 6,25% com corrimão duplo', status: 'Aprovado', success: true },
      { id: 3, title: 'Banheiros', desc: 'Espaço de giro de 1,50m e barras rígidas', status: 'Aprovado', success: true },
      { id: 4, title: 'Sinalização', desc: 'Piso tátil ausente em algumas salas', status: 'Pendente', success: false },
    ]
  },
  2: {
    name: 'Jardim Botânico',
    points: 88,
    type: 'Ouro',
    color: 'text-ouro',
    bg: 'bg-ouro/10',
    border: 'border-ouro',
    Icon: Square,
    specs: [
      { id: 1, title: 'Caminhos', desc: 'Pavimentação regular em 80% do trajeto', status: 'Aprovado', success: true },
      { id: 2, title: 'Rampas', desc: 'Acesso principal à estufa adaptado', status: 'Aprovado', success: true },
      { id: 3, title: 'Banheiros', desc: 'Banheiros adaptados próximos à entrada', status: 'Aprovado', success: true },
      { id: 4, title: 'Estacionamento', desc: 'Vagas exclusivas distantes da entrada principal', status: 'Pendente', success: false },
    ]
  },
  3: {
    name: 'Ópera de Arame',
    points: 79,
    type: 'Prata',
    color: 'text-prata',
    bg: 'bg-prata/10',
    border: 'border-prata',
    Icon: Square,
    specs: [
      { id: 1, title: 'Acesso Principal', desc: 'Passarela de metal vazada dificulta cadeiras com rodas finas', status: 'Pendente', success: false },
      { id: 2, title: 'Elevadores', desc: 'Elevador de acesso ao subsolo em funcionamento', status: 'Aprovado', success: true },
      { id: 3, title: 'Assentos', desc: 'Área reservada na plateia, mas sem boa visibilidade', status: 'Pendente', success: false },
      { id: 4, title: 'Banheiros', desc: 'Totalmente adaptados e bem sinalizados', status: 'Aprovado', success: true },
    ]
  },
  4: {
    name: 'Parque Barigui',
    points: 65,
    type: 'Bronze',
    color: 'text-bronze',
    bg: 'bg-bronze/10',
    border: 'border-bronze',
    Icon: Triangle,
    specs: [
      { id: 1, title: 'Pista de Caminhada', desc: 'Asfalto com irregularidades em alguns trechos', status: 'Pendente', success: false },
      { id: 2, title: 'Banheiros Públicos', desc: 'Falta manutenção nas barras de apoio', status: 'Pendente', success: false },
      { id: 3, title: 'Sinalização', desc: 'Inexistência de piso tátil nos quiosques', status: 'Pendente', success: false },
      { id: 4, title: 'Estacionamento', desc: 'Vagas demarcadas próximas às entradas', status: 'Aprovado', success: true },
    ]
  }
};

export function Details({ placeId, onNavigate }: DetailsProps) {
  const data = placesData[placeId] || placesData[1];
  const PlaceIcon = data.Icon;

  return (
    <div className="flex flex-col p-4 pb-20 bg-background min-h-full">
      {/* Header Info */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-text mb-2 tracking-tight">
          {data.name}
        </h2>
        
        <div className={`inline-flex items-center ${data.bg} border ${data.border} rounded-full px-4 py-2 mt-2`} aria-label={`Classificação: Selo ${data.type} com ${data.points} de 100 pontos`}>
          <PlaceIcon className={`${data.color} mr-2`} size={20} fill="currentColor" aria-hidden="true" />
          <span className={`font-bold ${data.color} text-sm`}>Selo {data.type} ({data.points}/100 pontos)</span>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="flex flex-col gap-3 mb-8">
        <button 
          onClick={() => onNavigate && onNavigate('form', placeId)}
          className="w-full min-h-[56px] bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-dark focus-visible:ring-4 focus-visible:ring-primary-dark transition-all flex items-center justify-center"
          aria-label="Avaliar este Local ou Enviar Medidas"
        >
          <Camera className="mr-2" size={24} aria-hidden="true" />
          Avaliar este Local / Enviar Medidas
        </button>

        <div className="flex gap-3">
          <button 
            className="flex-1 min-h-[56px] bg-slate-800 text-white font-bold rounded-xl shadow-md hover:bg-slate-900 focus-visible:ring-4 focus-visible:ring-slate-900 transition-all flex items-center justify-center"
            aria-label="Como chegar pelo Google Maps"
          >
            <MapPinned className="mr-2" size={22} aria-hidden="true" />
            Maps
          </button>
          
          <button 
            className="flex-1 min-h-[56px] bg-black text-white font-bold rounded-xl shadow-md hover:bg-zinc-800 focus-visible:ring-4 focus-visible:ring-zinc-800 transition-all flex items-center justify-center"
            aria-label="Chamar corrida no Uber para este local"
          >
            <Car className="mr-2" size={22} aria-hidden="true" />
            Uber
          </button>
        </div>
      </div>

      {/* Specifications List */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-text mb-4 border-b border-border pb-2">
          Especificações Técnicas (NBR 9050)
        </h3>
        <ul className="space-y-4">
          {data.specs.map((spec: any) => (
            <li key={spec.id} className="flex items-start bg-surface p-4 rounded-xl shadow-sm border border-border">
              <div className="mr-4 mt-1" title={`Status: ${spec.status}`}>
                {spec.success 
                  ? <CheckCircle className="text-success" size={24} aria-hidden="true" />
                  : <AlertCircle className="text-warning" size={24} aria-hidden="true" />
                }
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-text">{spec.title}</h4>
                <p className="text-text-light text-sm mt-1">{spec.desc}</p>
                <span className="sr-only">Status: {spec.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mini Gallery */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-text">Fotos da Comunidade</h3>
          <button 
            className="text-primary font-bold flex items-center min-h-[48px] px-2 hover:underline"
            aria-label="Ver todas as fotos"
          >
            Ver todas <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <div 
            className="min-w-[140px] h-[140px] bg-slate-300 rounded-xl flex-shrink-0 relative overflow-hidden"
            role="img" 
            aria-label={`Foto acessível referente a ${data.name}.`}
          >
            <img src="https://images.unsplash.com/photo-1517601140026-66ce2da02e21?auto=format&fit=crop&q=80&w=200&h=200" alt="Exemplo do local" className="object-cover w-full h-full opacity-80 mix-blend-multiply" />
          </div>
          <div 
            className="min-w-[140px] h-[140px] bg-slate-300 rounded-xl flex-shrink-0 relative overflow-hidden flex items-center justify-center bg-slate-200 hover:bg-slate-300 cursor-pointer transition-colors"
            role="button"
            aria-label="Adicionar foto"
          >
            <Camera className="text-slate-500" size={32} aria-hidden="true" />
          </div>
        </div>
      </div>

    </div>
  );
}
