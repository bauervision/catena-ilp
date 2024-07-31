import React from "react";
import { CSVColumns, CSVData } from "../data/OffenseData";
import { AGGrid } from "./AGGrid";
import { AGGridSimple } from "./AGGridSimple";
import {
  homicideTrendGridColumns,
  homicideTrendGridRows,
  firearmsGridRows,
  firearmsGridColumns,
  homicideTrendGridRows2,
  homicideTrendGridColumns2,
} from "../data/line-data";

export function DataPage() {
  return (
    <div>
      <div className=" w-100">
        {/* Table Section */}
        <div className="text-bg-secondary  p-5 w-100">
          <div className="container text-center">
            {/* Table 1 */}
            <div className="row align-items-center p-2">
              <div className="col">
                <div className="d-flex justify-content-center items-center">
                  <div
                    className="card"
                    style={{ height: "180px", width: "900px" }}
                  >
                    <div className="card-body">
                      <p>
                        <strong>(U) Recovered Firearms</strong>
                      </p>
                      <AGGridSimple
                        columns={firearmsGridColumns}
                        rows={firearmsGridRows}
                        paginate={false}
                        setHeight={"65%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Table 2 */}
            <div className="row align-items-center p-2">
              <div className="col">
                <div className="d-flex justify-content-center items-center">
                  {/* Table 2 */}
                  <div
                    className="card"
                    style={{ height: "220px", width: "800px" }}
                  >
                    <div className="card-body">
                      <p>
                        <strong>(U) 10 Year Homicide Trend 2013-2022</strong>
                      </p>
                      <AGGridSimple
                        columns={homicideTrendGridColumns}
                        rows={homicideTrendGridRows}
                        paginate={false}
                        setHeight={"55%"}
                      />
                      <p>
                        *The citywide 2013 homicide statistics include the 12
                        victims of the Washington Navy Yard shooting incident
                        that occurred on September 16, 2013.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table 2A */}
            <div className="row align-items-center p-2">
              <div className="col">
                <div className="d-flex justify-content-center items-center">
                  {/* Table 2 */}
                  <div
                    className="card"
                    style={{ height: "170px", width: "800px" }}
                  >
                    <div className="card-body">
                      <p>
                        <strong>(U) 10 Year Homicide Trend 2003-2012</strong>
                      </p>
                      <AGGridSimple
                        columns={homicideTrendGridColumns2}
                        rows={homicideTrendGridRows2}
                        paginate={false}
                        setHeight={"80%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table 3 */}
            <div className="row align-items-center p-2 ">
              <div className="col">
                <div className="">
                  <div className="card">
                    <div className="card-body">
                      <p>
                        <strong>(U) Raw CSV Data</strong>
                      </p>
                      <AGGrid
                        columns={CSVColumns}
                        rows={CSVData}
                        paginate={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
