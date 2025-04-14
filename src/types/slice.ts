import { AnalyzeTextSuccessResponse } from './network';

interface AnalyzeTextSliceData {
  data: AnalyzeTextSuccessResponse;
  isLoading: boolean;
  error: string | null;
}

export { AnalyzeTextSliceData };
