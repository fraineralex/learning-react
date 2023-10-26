import * as React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { SoporteQuizzes, quizzes } from '../types.d'
import { LanguageLogo } from './LanguagesLogos'
import { Typography } from '@mui/material'

const options = Object.entries(SoporteQuizzes).map(([key, value]) => value)

interface Props {
  changeQuiz: (quiz: quizzes) => void
  selectedQuiz: quizzes
}

export default function SplitQuizLanguage ({ changeQuiz, selectedQuiz }: Props) {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(
    options.findIndex(option => option.language === selectedQuiz)
  )

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
    language: quizzes
  ) => {
    changeQuiz(language)
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const backgroundColor = options[selectedIndex].backgroundColor
  const color = options[selectedIndex].color

  return (
    <React.Fragment>
      <ButtonGroup
        variant='contained'
        ref={anchorRef}
        aria-label='split button'
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <Button
          style={{
            backgroundColor: backgroundColor,
            color: color,
            textTransform: 'none'
          }}
        >
          <LanguageLogo
            language={options[selectedIndex].language}
            width={24}
            height={24}
          />
          <Typography style={{ marginLeft: 10, fontWeight: 'bold' }}>
            {options[selectedIndex].text}
          </Typography>
        </Button>
        <Button
          size='small'
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          onClick={handleToggle}
          style={{ backgroundColor: backgroundColor }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.text}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={event =>
                        handleMenuItemClick(event, index, option.language)
                      }
                    >
                      <LanguageLogo
                        language={option.language}
                        width={18}
                        height={18}
                      />
                      <Typography style={{ marginLeft: 10 }}>
                        {option.text}
                      </Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  )
}
