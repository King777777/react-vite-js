// import { useEffect } from 'react';
// import BpmnModeler from 'bpmn-js/lib/Modeler';
// import { xmlstr } from './test';
//
//
// // 全局组件
// function App() {
//
//   let bpmnModeler = null;
//
//   useEffect(() => {
//     initBpmn();
//   }, [])
//
//   const initBpmn = () => {
//
//     bpmnModeler = new BpmnModeler({
//       container: '#canvas', // 这里为数组的第一个元素
//       height: '100vh',
//     });
//
//     createBpmnDiagram();
//   }
//
//   const createBpmnDiagram = async () => {
//     // 开始绘制出事bpmn的图
//     try {
//       const result = await bpmnModeler.importXML(xmlstr);
//       console.log(result);
//     } catch(error) {
//       console.error(error)
//     }
//   }
//   const click = () => {
//     fetch()
//   }
//
//   return (
//     <button onClick={click}>
//       get
//     </button>
//     // <div className="App">
//     //   {/* bpmn容器 */}
//     //   <div id="canvas" style={{height: 600, pointerEvents: 'none'}} ></div>
//     // </div>
//   );
// }
//
// export default App;

import React from 'react';
import * as XLSX from 'xlsx';  // 引入 xlsx 库
import ExcelJS from 'exceljs';

function App() {
  const downloadCSV = async () => {
    try {
      // 使用 fetch 请求 CSV 文件
      const response = await fetch('http://localhost:8000/download-csv', {
        method: 'GET',
      });

      // 检查响应状态
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // 获取响应的二进制数据（Blob）
      const blob = await response.blob();

      // 将 Blob 转换为文本（CSV 格式）
      const text = await blob.text();

      // 将 CSV 内容转换为 XLSX 格式
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(parseCSV(text)); // 解析 CSV 字符串为二维数组
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      // 创建一个 XLSX 文件并触发下载
      const xlsxBlob = XLSX.write(wb, {
        bookType: 'xlsx',    // 设置文件类型为 XLSX
        type: 'array',        // 设置输出类型为 Blob
      });
      console.log(Object.prototype.toString.call(xlsxBlob));
      const excelbook = new ExcelJS.Workbook();
      await excelbook.xlsx.load(xlsxBlob);
      console.log(Object.prototype.toString.call(excelbook));
      const sheet1 = excelbook.getWorksheet("Sheet1");
      console.log(Object.prototype.toString.call(sheet1));
      const image64 = `data:image/png;base64,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`;

      const imageId = excelbook.addImage({
        base64: image64, // 图片的 Base64 编码
        extension: 'png',
      })
      sheet1.addBackgroundImage(imageId);
      const buffer = await excelbook.xlsx.writeBuffer();

      const downBlob = new Blob([buffer],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      // const downBlob = new Blob([xlsxBlob],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      // 创建一个下载链接
      const link = document.createElement('a');
      link.href = URL.createObjectURL(downBlob); // 使用 Blob 创建 URL
      link.download = 'data.xlsx'; // 设置文件名为 XLSX 格式

      // 触发点击事件，开始下载
      link.click();
    } catch (error) {
      console.error('Error downloading and converting CSV to XLSX:', error);
    }
  };

  // 将 CSV 数据转为二维数组
  const parseCSV = (csv) => {
    const rows = csv.split('\n');
    return rows.map((row) => row.split(','));
  };

  return (
    <div className="App">
      <h1>CSV to XLSX Converter</h1>
      <button onClick={downloadCSV}>Download as XLSX</button>
    </div>
  );
}

export default App;







