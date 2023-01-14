import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../../assets/icons'
import { colors } from '../../helpers/colors'
import { Flex, H4, Img, Span, Counter } from '../index'

function ProductCardTwo({ product }) {
    const { image, name_uz, price } = product
    return (
        <Wrapper>
            <ImageWrap>
                <Img src={image} alt={name_uz} objectFit='contain' />
            </ImageWrap>

            <Content>
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                    mb='14px'
                >
                    <Span>{name_uz}</Span>
                    <RemoveButton>
                        <CloseIcon />
                    </RemoveButton>
                </Flex>
                <Flex mb={14}>
                    <Counter />
                </Flex>
                <Flex gap={24}>
                    <Flex gap={14}>
                        <Span>Сумма:</Span>
                        <H4>{price} UZS</H4>
                    </Flex>
                    <Flex gap={14}>
                        <Span>Сумма доставки:</Span>
                        <H4>{0} UZS</H4>
                    </Flex>
                </Flex>
            </Content>
        </Wrapper>
    )
}

export default ProductCardTwo

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
    background: ${colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 15px;
`
const ImageWrap = styled.div`
    width: 95px;
    height: 105px;
    border-radius: 10px;
    overflow: hidden;
`
const Content = styled.div`
    flex: 1 1 auto;
`

const RemoveButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a5a5a5;
`
