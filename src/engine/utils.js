export const GridUtils = {
    mirror(rows) {
        return rows.map(row => [...row].reverse());
    },
    transpose(rows) {
        return rows[0].map((col, i) => rows.map(row => row[i]));
    },
    projectSideways(rows) {
        return GridUtils.mirror(GridUtils.transpose(rows));
    }
}