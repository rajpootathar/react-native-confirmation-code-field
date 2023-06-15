import React from 'react';
import { render } from '@testing-library/react-native';
import { MaskSymbol } from '../MaskSymbol';
import { delay } from './delay';
const requiredProps = {
    children: '',
    maskSymbol: '*',
    isLastFilledCell: false,
};
const renderMaskSymbol = (props) => render(<MaskSymbol {...requiredProps} {...props}/>);
it('should render children by default', () => {
    const children = '123';
    const { UNSAFE_getByType } = renderMaskSymbol({ children });
    expect(UNSAFE_getByType(MaskSymbol).children).toEqual([children]);
});
it('should render maskSymbol when is last filled cell', () => {
    const maskSymbol = '0';
    const isLastFilledCell = true;
    const { UNSAFE_getByType } = renderMaskSymbol({ maskSymbol, isLastFilledCell });
    expect(UNSAFE_getByType(MaskSymbol).children).toEqual([maskSymbol]);
});
it('should render maskSymbol after timeout', async () => {
    const maskSymbol = '0';
    const timeout = 100;
    const { UNSAFE_getByType } = renderMaskSymbol({ maskSymbol, delay: timeout });
    await delay(timeout + 50);
    expect(UNSAFE_getByType(MaskSymbol).children).toEqual([maskSymbol]);
});
