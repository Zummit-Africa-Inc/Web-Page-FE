import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AttachMoney } from '@mui/icons-material'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 387,
        height: 250,
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        borderRadius: 20,
        textAlign: 'center',
    },
    iconWrapper: {
        width: 60,
        height: 42,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--color-white)',
        borderRadius: 10,
        color: 'var(--color-white)',
    },
})

const Card = ({title,text}) => {
    const classes = useStyles()

  return (
    <div className={classes.root}>
        <div className={classes.iconWrapper}>
            &bull;<AttachMoney />&bull;
        </div>
        <Typography variant='h5' my={2} textTransform='uppercase'>
            {title}
        </Typography>
        <Typography variant='body1' px={4}>
            {text}
        </Typography>
    </div>
  )
}

export default Card