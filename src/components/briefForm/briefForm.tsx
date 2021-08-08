import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { getProductById } from '../../provider/api/product/getProductById';
import { Brief } from '../../provider/models/brief';
import { Product } from '../../provider/models/product';
import { saveProduct } from '../../reducer/product.reducer';
import { sagaActions } from '../../sagas/sagasActions';
import SelectProduct from '../ui/selectProduct';
import TextField from '@material-ui/core/TextField';
import './briefForm.css'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

function BriefForm() {
  const [brief, setBrief] = useState(new Brief())
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_PRODUCTSLIST_SAGA})
    return () => {
      clearTimeout()
    }
  }, [dispatch])

  async function onSelectProduct (productId: number){
    onChangeInput(productId, 'productId')
    const productChoosed: Product = await getProductById(productId)
    dispatch(saveProduct(productChoosed))
  }

  async function onChangeInput (value: string | number, field: 'title' | 'comment' | 'productId'){
    if(field === 'productId' && typeof value === 'number'){
      setBrief(old => ({...old, [field]: value}))
    } else {
      setBrief(old => ({...old, [field]: value}))
    }
  }

  function onSubmit (){
    if (!loading) {
      setLoading(true)
      dispatch({ type: sagaActions.FETCH_POSTBRIEF_SAGA, payload: brief })
      window.setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }

  return (
    <article className='briefArticle' data-testid='briefForm'>
      <form className='briefForm'>
        <TextField required defaultValue="Titre" onChange ={(e)=> onChangeInput(e.target.value, 'title') }/>
        <TextField required defaultValue="Commentaire" onChange ={(e)=> onChangeInput(e.target.value, 'comment') }/>
        <SelectProduct OnChange={(e: number)=> onSelectProduct(e)}/>
        <>
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={onSubmit}
          >
            {loading ? <CircularProgress size={24} /> : 'Sauvegarder'}
          </Button>
        </>
      </form>
    </article>
  )
}

export default BriefForm;
