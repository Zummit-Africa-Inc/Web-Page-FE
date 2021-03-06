import React from 'react'
import { makeStyles } from '@mui/styles'
import { AttachMoney } from '@mui/icons-material'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 300,
        height: 250,
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        borderRadius: 20,
        textAlign: 'left',
        padding: '0px 25px',
    },
    iconContainer: {
        width: 82,
        height: 72,
        background: "var(--color-secondary-light)",
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
        border: '3px solid var(--color-primary)',
        borderRadius: 10,
        color: 'var(--color-primary)',
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        textTransform: 'uppercase',
        color: 'var(--color-primary)',
        margin: "5px 0 10px 0",
    },
    text: {
        fontSize: 18,
        fontWeight: 400,
        color: 'var(--color-text-secondary)',
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
        <h2 className={classes.title}>
            {title}
        </h2>
        <p className={classes.text}>
            {text}
        </p>
    </div>
  )
}

export default ClassesCard