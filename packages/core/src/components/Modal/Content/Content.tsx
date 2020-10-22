import { WithStyle } from '@medly-components/utils';
import React, { useContext, useRef } from 'react';
import { ModalContext } from '../Modal.context';
import { useScrollState } from '../useScrollState';
import * as Styled from './Content.styled';
import { Props } from './types';

export const Content: React.FC<Props> & WithStyle = React.memo(() => {
    const { id, dispatch, scrollState, headerHeight } = useContext(ModalContext),
        contentRef = useRef(),
        handleScroll = useScrollState({ ref: contentRef, scrollState, dispatch });

    return <Styled.Content ref={contentRef} onScroll={handleScroll} {...{ headerHeight, scrollState, id: `${id}-content` }} />;
});
Content.displayName = 'Content';
Content.Style = Styled.Content;
