// ★ IgrDataChart に必要なモジュールをインポートしましょう

// まずはグラフの軸（Axes）のモジュール
import { IgrCategoryXAxis, IgrNumericYAxis } from "igniteui-react-charts";

// 次はシリーズのモジュール
import { IgrColumnSeries } from "igniteui-react-charts";

// 最後にチャートのモジュール
import { IgrDataChart } from "igniteui-react-charts";
import { IgrDataChartCoreModule } from "igniteui-react-charts";
import { IgrDataChartCategoryModule } from "igniteui-react-charts";

// ★ 必要なモジュールを登録しましょう
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();

// ★ 関数コンポーネントで MyDataChart を定義していきましょう
export const MyDataChart = () => {
    const data = [
        { Name: "Mori", Score: 50 },
        { Name: "Jack", Score: 80 },
        { Name: "Jun-ichi", Score: 90 },
        { Name: "Hayato", Score: 30 },
        { Name: "Randoll", Score: 100 },
    ];

    return(
        <div>
            <IgrDataChart
              dataSource={data}
              width="500px"
              height="300px">
              
              {/* ★ 軸の設定です */}
              <IgrCategoryXAxis name="xAxis" label="Name" />
              <IgrNumericYAxis  name="yAxis" minimumValue="0" maximumValue="100" />
              
              {/* ★ シリーズの設定です */}
              <IgrColumnSeries
                name="series1"
                xAxisName="xAxis"
                yAxisName="yAxis"
                valueMemberPath="Score" />
              </IgrDataChart>
        </div>
    );
}