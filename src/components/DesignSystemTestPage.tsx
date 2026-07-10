import { useState } from 'react'

type ButtonVariant = 'default' | 'hover' | 'selected' | 'disabled' | 'outline'

const buttonClasses: Record<ButtonVariant, string> = {
  default: 'border-[#DA3806] bg-[#DA3806] text-[#FCFCFC]',
  hover: 'border-[#4827AF] bg-[#4827AF] text-[#FCFCFC]',
  selected: 'border-[#341C7D] bg-[#341C7D] text-[#FCFCFC]',
  disabled: 'border-[#D3D3D3] bg-[#D3D3D3] text-[#FCFCFC]',
  outline: 'border-[#DA3806] bg-transparent text-[#DA3806]',
}

function PrimaryButton({ label, variant = 'default' }: { label: string; variant?: ButtonVariant }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const isDisabled = variant === 'disabled'
  const isOutline = variant === 'outline'

  const resolvedClass = isOutline
    ? isDisabled
      ? 'border-[3px] border-[#D3D3D3] bg-transparent text-[#D3D3D3]'
      : isSelected
        ? 'border-[3px] border-[#341C7D] bg-transparent text-[#341C7D]'
        : isHovered
          ? 'border-[3px] border-[#4827AF] bg-transparent text-[#4827AF]'
          : 'border-[3px] border-[#DA3806] bg-transparent text-[#DA3806]'
    : isDisabled
      ? buttonClasses.disabled
      : isSelected
        ? buttonClasses.selected
        : isHovered
          ? buttonClasses.hover
          : buttonClasses.default

  return (
    <button
      className={`h-[48px] min-w-[200px] max-w-[350px] rounded-[24px] border-[3px] px-[24px] text-[20px] font-bold leading-none transition-all duration-200 ease-out ${resolvedClass}`}
      style={{ fontFamily: 'AUMOVIO Screen, sans-serif' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (!isSelected) {
          setIsSelected(false)
        }
      }}
      onBlur={() => {
        setIsHovered(false)
        if (!isSelected) {
          setIsSelected(false)
        }
      }}
      onClick={() => {
        if (!isDisabled) {
          setIsSelected((value) => !value)
        }
      }}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

function ColorSwatch({ name, hex, textColor = '#000000' }: { name: string; hex: string; textColor?: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-[16px] border border-white/20 p-4">
      <div className="h-[72px] rounded-[12px]" style={{ backgroundColor: hex }} />
      <div className="text-sm font-medium" style={{ color: textColor }}>
        <p>{name}</p>
        <p className="opacity-80">{hex}</p>
      </div>
    </div>
  )
}

function DesignSystemTestPage() {
  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="rounded-[24px] border border-white/10 bg-[#111111] p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D3D3D3]">Aumovio</p>
          <h1
            className="mb-4 text-[36px] font-normal md:text-[56px]"
            style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 400 }}
          >
            Design System Test Page
          </h1>
          <p className="max-w-2xl text-[16px] text-[#D3D3D3]">
            Cette page de test reprend les tokens, composants et hiérarchies visuelles du skill Aumovio.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-[#111111] p-8">
            <h2 className="mb-6 text-[24px] font-semibold" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 700 }}>
              Couleurs principales
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <ColorSwatch name="Orange 500" hex="#DA3806" textColor="#FFFFFF" />
              <ColorSwatch name="Purple 500" hex="#341C7D" textColor="#FFFFFF" />
              <ColorSwatch name="Purple" hex="#4827AF" textColor="#FFFFFF" />
              <ColorSwatch name="Grey" hex="#D3D3D3" textColor="#000000" />
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#111111] p-8">
            <h2 className="mb-6 text-[24px] font-semibold" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 700 }}>
              Typographie
            </h2>
            <div className="space-y-4">
              <h1 className="text-[80px] leading-none" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 400 }}>
                H1 Desktop
              </h1>
              <h2 className="text-[56px] leading-none" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 400 }}>
                H2 Desktop
              </h2>
              <h3 className="text-[32px] leading-none" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 400 }}>
                H3 title
              </h3>
              <p className="text-[20px]" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 400 }}>
                Text R / Button style preview
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-white/10 bg-[#111111] p-8">
          <h2 className="mb-6 text-[24px] font-semibold" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 700 }}>
            Bouton principal et variante outline
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <PrimaryButton label="Principal" variant="default" />
            <PrimaryButton label="Outline" variant="outline" />
          </div>
        </section>

        <section className="rounded-[24px] border border-white/10 bg-[#111111] p-8">
          <h2 className="mb-6 text-[24px] font-semibold" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 700 }}>
            Carte de contenu
          </h2>
          <div className="max-w-[320px] bg-[#FCFCFC] p-[24px] text-black shadow-2xl">
            <div className="mb-[18px] h-[140px] overflow-hidden bg-[#F3F3F3]">
              <img
                src="https://www.figma.com/api/mcp/asset/25e539e1-ab71-4d8c-8a86-74899cf98ac6"
                alt="Aumovio gradient"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-[32px] leading-none" style={{ fontFamily: 'AUMOVIO Screen, sans-serif', fontWeight: 400 }}>
              Title
            </h3>
            <p className="mb-5 text-[16px] text-[#4B4B4B]">
              Description du contenu de la carte adaptée au système Aumovio.
            </p>
            <PrimaryButton label="Action" variant="default" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignSystemTestPage
