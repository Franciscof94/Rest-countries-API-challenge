import React from 'react'
import ReactLoading from 'react-loading';
import { LoadingContainer } from './Styles';

const Loading = () => {
  return (
    <LoadingContainer>
        <ReactLoading type='spinningBubbles' color='#2c2c2c' height={90} width={90} />
    </LoadingContainer>
  )
}

export default Loading