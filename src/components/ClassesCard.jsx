import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AttachMoney } from '@mui/icons-material'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 300,
        height: 200,
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        borderRadius: 20,
        textAlign: 'left',
        padding: '0px 25px',
    },
    iconContainer: {
        width: 82,
        height: 82,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--color-secondary)',
        borderRadius: 10,
    },
    iconWrapper: {
        width: 60,
        height: 42,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--color-primary)',
        borderRadius: 10,
        color: 'var(--color-primary)',
    },
})

const ClassesCard = ({title,text}) => {
    const classes = useStyles()

  return (
    <div className={classes.root}>
        <div className={classes.iconContainer}>
            <div className={classes.iconWrapper}>
                &bull;<AttachMoney />&bull;
            </div>
        </div>
        <Typography variant='h6' my={1} textTransform='uppercase'>
            {title}
        </Typography>
        <Typography variant='body1'>
            {text}
        </Typography>
    </div>
  )
}

export default ClassesCard