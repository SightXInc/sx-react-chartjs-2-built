import type { MouseEvent } from 'react';
import type {
  ChartType,
  ChartData,
  DefaultDataPoint,
  ChartDataset,
  ChartOptions,
  Chart,
} from 'chartjs-v4';
import type { ForwardedRef } from './types.js';
export declare function reforwardRef<T>(ref: ForwardedRef<T>, value: T): void;
export declare function setOptions<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
>(chart: Chart<TType, TData, TLabel>, nextOptions: ChartOptions<TType>): void;
export declare function setLabels<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
>(
  currentData: ChartData<TType, TData, TLabel>,
  nextLabels: TLabel[] | undefined
): void;
export declare function setDatasets<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
>(
  currentData: ChartData<TType, TData, TLabel>,
  nextDatasets: ChartDataset<TType, TData>[],
  datasetIdKey?: string
): void;
export declare function cloneData<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
>(
  data: ChartData<TType, TData, TLabel>,
  datasetIdKey?: string
): ChartData<TType, TData, TLabel>;
/**
 * Get dataset from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */
export declare function getDatasetAtEvent(
  chart: Chart,
  event: MouseEvent<HTMLCanvasElement>
): import('chartjs-v4').InteractionItem[];
/**
 * Get single dataset element from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */
export declare function getElementAtEvent(
  chart: Chart,
  event: MouseEvent<HTMLCanvasElement>
): import('chartjs-v4').InteractionItem[];
/**
 * Get all dataset elements from mouse click event
 * @param chart - Chart.js instance
 * @param event - Mouse click event
 * @returns Dataset
 */
export declare function getElementsAtEvent(
  chart: Chart,
  event: MouseEvent<HTMLCanvasElement>
): import('chartjs-v4').InteractionItem[];
//# sourceMappingURL=utils.d.ts.map
