import api from '../../../utils/api'
import styles from './AddPet.module.css'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Hooks
import useFlashMessage from '../../../hooks/useFlashMessage'

// Components
import PetForm from '../../form/PetForm'

function AddPet() {
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
        <p>Formulário</p>
      </div>
      <PetForm btnText="Cadastrar Pet" />
    </section>
  )
}

export default AddPet
