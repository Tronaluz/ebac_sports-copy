import { useDispatch, useSelector } from 'react-redux'
import { addToCart, toggleFavorite } from '../../store/cartSlice'
import { Produto as ProdutoType } from '../../App'
import type { RootState } from '../../store'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const estaNosFavoritos = useSelector((state: RootState) =>
    state.cart.favorites.some(fav => fav.id === produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(toggleFavorite(produto))} type="button">
        {estaNosFavoritos ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addToCart(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
