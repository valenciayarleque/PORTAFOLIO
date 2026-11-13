/** Interior circular de la foto: muestra la imagen o, si no existe, las iniciales. */
export function ProfileInner({ photo }: { photo: string | null }) {
  return (
    <div className={`in${photo ? ' has' : ''}`}>
      {photo && <img src={photo} alt="Foto de perfil de Jhon VY" />}
      <span className="ini">JVY</span>
    </div>
  )
}
