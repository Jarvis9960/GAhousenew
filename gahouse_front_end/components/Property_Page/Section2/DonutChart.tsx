import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);






export function DonutChat({ ListPrice }) {


  const [totalAmount, settotalAmount] = useState(ListPrice)
  const [Interest, setInterest] = useState("6")
  const [Tax, setTax] = useState("3000")
  const [Insurance, setInsurance] = useState("1000")
  const [PMI, setPMI] = useState("0")
  const [years, setyears] = useState("30")
  const [downPayment, setdownPayment] = useState(Math.round(ListPrice * 0.2))
  const [calculated, setcalculated] = useState(0)
  const [calculatedFinal, setcalculatedFinal] = useState(0)
  const [chartData, setchartData] = useState([0, 0, 0, 0, 0])
  const Calculate = () => {
    const P = Number(totalAmount) - Number(downPayment)
    const R = Number(Interest) / 12 / 100
    const N = Number(years) * 12
    console.log("P", 4 * 2)
    let a = Math.round(P * R * (Math.pow((1 + R), N)) / ((Math.pow((1 + R), N)) - 1))
    setcalculated(Math.round(a))
    setchartData([a, Number(Tax) / 12, Number(Insurance) / 12])
    a = a + Number(Tax) / 12 + Number(Insurance) / 12 + Number(PMI)
    setcalculatedFinal(Math.round(a))
  }
  useEffect(() => {
    Calculate()
    return () => {
    }
  }, [])



  const data = {

    datasets: [
      {
        label: '',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section data-aos="fade-up" className="py-6 border-bottom">
        <div className="property-mortgage-calculator-wrap property-section-wrap" id="property-mortgage-calculator-wrap">
          <div className="block-wrap">
            <div className="block-title-wrap">
              <h2>Mortgage Calculator</h2>
            </div>
            <div className="block-content-wrap">
              <div className="d-flex align-items-center sm-column">
                <div className="mortgage-calculator-chart flex-fill">
                  <div className="mortgage-calculator-monthly-payment-wrap">
                    <div id="m_monthly_val" className="mortgage-calculator-monthly-payment  fs-25">${Math.round(calculatedFinal)}/ Monthly</div>
                    {/* <div className="mortgage-calculator-monthly-requency"></div> */}
                  </div>

                  <div id="mortgage-calculator-chart " style={{ display: "block", height: "200px", width: "200px" }}>
                    <Doughnut data={data} />
                  </div>


                </div>
                <div className="mortgage-calculator-data flex-fill">
                  <ul className="list-unstyled fs-14">
                    <li className="mortgage-calculator-data-1 stats-data-1 d-flex">
                      <i className="houzez-icon icon-sign-badge-circle mr-1">
                        <span className="dot" style={{ background: 'rgba(255, 99, 132, 1)' }}></span>
                      </i>
                      <strong className="d-flex">Principal &amp; Interest</strong>
                      <span id="principal_interest_val">: ${Math.round(Number(calculated))}</span>
                    </li>

                    <li className="mortgage-calculator-data-2 stats-data-2">
                      <i className="houzez-icon icon-sign-badge-circle mr-1">
                        <span className="dot" style={{ background: 'rgba(54, 162, 235, 1)' }}></span>
                      </i>
                      <strong>Property Tax</strong>
                      <span id="property_tax_val">: ${Math.round(Number(Tax) / 12)}</span>
                    </li>

                    <li className="mortgage-calculator-data-3 stats-data-3">
                      <i className="houzez-icon icon-sign-badge-circle mr-1">
                        <span className="dot" style={{ background: 'rgba(255, 206, 86, 1)' }}></span>
                      </i>
                      <strong>Home Insurance</strong>
                      <span id="home_insurance_val">: ${Math.round(Number(Insurance) / 12)}</span>
                    </li>

                    <li className="mortgage-calculator-data-4 stats-data-4">
                      <i className="houzez-icon icon-sign-badge-circle mr-1">
                        <span className="dot" style={{ background: 'rgba(153, 102, 255, 1)' }}></span>
                      </i>
                      <strong>PMI</strong>
                      <span id="pmi_val">: ${PMI}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <form method="post">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Total Amount</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input value={totalAmount} onChange={(e: any) => settotalAmount(e.target.value)} id="total_amount" type="text" className="form-control" placeholder="Total Amount" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Down Payment</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input value={downPayment} onChange={(e: any) => setdownPayment(e.target.value)} id="down_payment" type="text" className="form-control" placeholder="Down Payment" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Interest Rate</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">%</div>
                        </div>
                        <input value={Interest} onChange={(e: any) => setInterest(e.target.value)} id="interest_rate" type="text" className="form-control" placeholder="Interest Rate" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Loan Terms (Years)</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="houzez-icon icon-calendar-3"></i>
                          </div>
                        </div>
                        <input value={years} onChange={(e: any) => setyears(e.target.value)} id="loan_term" type="text" className="form-control" placeholder="Loan Terms (Years)" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Property Tax</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input value={Tax} onChange={(e: any) => setTax(e.target.value)} id="property_tax" type="text" className="form-control" placeholder="Property Tax" />
                      </div>
                    </div>
                  </div>


                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Home Insurance</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input value={Insurance} onChange={(e: any) => setInsurance(e.target.value)} id="home_insurance" type="text" className="form-control" placeholder="Home Insurance" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>PMI</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$</div>
                        </div>
                        <input value={PMI} onChange={(e: any) => setPMI(e.target.value)} id="pmi" type="text" className="form-control" placeholder="PMI" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <p className="pmi-note">*If the down payment is below 20%, there might be a PMI payment. Please call lender to discuss.</p>

                    <div id="calculate_loan" onClick={Calculate} className="btn btn-search btn-primary">Calculate</div>
                  </div>
                </div>
              </form>		</div>
          </div>
        </div>

      </section>

    </>
  );
}
