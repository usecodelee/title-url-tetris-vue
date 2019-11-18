import { Url, Title } from './url';
import { GridUtils } from './utils';
import { BrailleConverter } from './brailleTo';
import { areaWidth } from './engine';

export const Renderer = (grid, where) => {
    if (!grid.length) {
        return null;
    }
    const projectedGrid = GridUtils.projectSideways(grid);
    const hash = BrailleConverter.convert(projectedGrid, areaWidth);
    Url(hash);
    Title(hash);
};