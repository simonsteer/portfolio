import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Fade from './transition-tests'

const PageShell = (Page) => {
  return ({ ...props, children }) =>
    <CSSTransition
      {...props}
      timeout={300}
      classNames="fade"
    >
      <TransitionGroup>
        <Page {...props} key={Page.name} />
      </TransitionGroup>
    </CSSTransition>
};

export default PageShell