// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import modalCloseActions from '../modules/modalCloseActions';
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalStyles from './../modules/getModalStyles';

// Import interfaces
import './../interfaces';

const defaultStyles = {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
};

const StyledModalOverlay = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

const ModalOverlay: React.FC<ElementPropsType> = ({ action, focus, focusElement, options }) => {
  const modalOverlayStyles: object | any = options?.modalOverlayStyles!;
  const content: any = options?.content!;

  return (
    <StyledModalOverlay
      className='modal__overlay'
      overwriteStyles={modalOverlayStyles!}
      onClick={(e: React.MouseEvent): void => modalCloseActions(action, focus, e, focusElement!, content)}
    />
  );
};

export default ModalOverlay;