import React, { useRef, useEffect } from 'react';
import * as joint from 'jointjs';

const Paper: React.FC = () => {
    const canvas: any = useRef(null);

    useEffect(() => {
        const elements = [
            new joint.shapes.basic.Rect({
                position: { x: 100, y: 30 },
                size: { width: 100, height: 30 },
                attrs: { rect: { fill: 'blue' }, text: { text: 'My Element', fill: 'white' } }
            }),
            new joint.shapes.basic.Rect({
                position: { x: 200, y: 30 },
                size: { width: 100, height: 30 },
                attrs: { rect: { fill: 'blue' }, text: { text: 'My Element', fill: 'white' } }
            }),
            new joint.shapes.basic.Rect({
                position: { x: 300, y: 30 },
                size: { width: 100, height: 30 },
                attrs: { rect: { fill: 'blue' }, text: { text: 'My Element', fill: 'white' } }
            }),
        ];

        const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });

        const paper = new joint.dia.Paper({
            el: canvas.current,
            model: graph,
            width: '100%',
            height: '100%',
            gridSize: 1,
            background: {
                color: '#F8F9FA',
            },
            frozen: true,
            async: true,
            sorting: joint.dia.Paper.sorting.APPROX,
            cellViewNamespace: joint.shapes
        });

        graph.addCells(elements);

        paper.unfreeze();

        return () => {
            // TODO: ReactJS strict mode cause hook to be executed twice so
            // following cleanup code doesn't work properly
            // paper.remove();
        }
    }, []);
    return (
        <div className="flex-grow bg-white border overflow-auto">
            <div className="canvas" ref={canvas} />
        </div>
    );
};

export default Paper;
