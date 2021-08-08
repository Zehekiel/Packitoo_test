import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { Brief } from '../../provider/models/brief'
import { sagaActions } from '../../sagas/sagasActions'
import SelectProduct from '../ui/selectProduct'
import TextField from '@material-ui/core/TextField'
import './briefForm.css'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

function BriefForm() {
  const [brief, setBrief] = useState(new Brief())
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_PRODUCTSLIST_SAGA})
    return () => {
      clearTimeout()
    }
  }, [dispatch])

  async function onSelectProduct (productId: number){
    onChangeInput(productId, 'productId')
  }

  async function onChangeInput (value: string | number, field: 'title' | 'comment' | 'productId'){
    if(field === 'productId' && typeof value === 'number'){
      setBrief(old => ({...old, [field]: value}))
    } else {
      setBrief(old => ({...old, [field]: value}))
    }
  }

  const isFormIsValid = (): boolean => {
    if (brief.title === ''){
      setErrorMessage('Il manque le titre')
      return false
    }

    if (brief.comment === ''){
      setErrorMessage('Il manque le commentaire')
      return false
    }

    if (brief.productId === 0){
      setErrorMessage('Choissisez un produit')
      return false
    }

    setErrorMessage('')
    return true
  } 

  function onSubmit (){
    if (!loading && isFormIsValid()) {
      setLoading(true)
      dispatch({ type: sagaActions.FETCH_POSTBRIEF_SAGA, payload: brief })
      window.setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  return (
    <article className='briefArticle' data-testid='briefForm'>
      <form className='briefForm'>
        <TextField 
          required
          placeholder='Titre'
          onChange ={(e)=> onChangeInput(e.target.value, 'title') }
          data-testid='titleInput'
        />
        <TextField 
          required 
          placeholder='Commentaire'
          onChange ={(e)=> onChangeInput(e.target.value, 'comment') }
          data-testid='commentInput'
        />
        <SelectProduct 
          OnChange={(e: number)=> onSelectProduct(e)}
          dataTestid='selectProduct'
        />
        <>
          {errorMessage.length > 0 && <p className='errorText'>{errorMessage}</p>}
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={onSubmit}
            data-testid='buttonSubmit'
            type='submit'
          >
            {loading ? <CircularProgress size={24} /> : 'Sauvegarder'}
          </Button>
        </>
      </form>
    </article>
  )
}

export default BriefForm
