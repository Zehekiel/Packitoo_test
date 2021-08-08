import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Brief } from '../../provider/models/brief'
import { createSelector } from 'reselect'
import { Product, ProductArray } from '../../provider/models/product'
import { useAppSelector } from '../../hooks'

const useStyles = makeStyles({
  card: {
    minWidth: '17vw',
    margin: 20,
    border: '1px solid gray'
  },
})

export default function BriefCard(props: {brief: Brief}) {
  const productList:  ProductArray = useAppSelector((state) => state.productListReducer.value)
  const { brief } = props
  const styles = useStyles()

  const StateProduct = (state: number) => state
  const getProduct = createSelector(
    StateProduct,
    state => productList.reduce((acc: Product, product: Product) => {
      if (product.id === state){
        acc = product
        return acc
      }
      return acc
    })
  )

  return (
    <Card className={styles.card} data-testid='briefCard'>
      <CardContent>
        <Typography variant="h5" component="h2" data-testid='briefCardTitle'>
          {brief.title}
        </Typography>
        <Typography  color="textSecondary" data-testid='briefCardProduct'>
          {getProduct(brief.productId).name}
        </Typography>
        <Typography variant="body2" component="p">
          {brief.comment}
        </Typography>
      </CardContent>
    </Card>
  )
}