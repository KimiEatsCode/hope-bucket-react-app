import React, { useContext } from "react";
import { Context } from "../ListContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Bucket() {
  const listContext = useContext(Context);

  let totalHope = listContext.list.length;

  if (totalHope < 10) {
    return (
      <>
        <Row>
          <Col>
            <div>
              <div className="itemCount">{totalHope}</div>
              <div className="bucketIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="50%"
                  fill="#000"
                  class="bi bi-bucket"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"></path>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col>
            <h4 className="text-center mt-5">
              Great job! You built up 10 items of hope. Reward yourself with
              something good to eat, buy yourself something nice, or take a well
              earned break!
            </h4>
            <h3 className="mt-4 text-center">
              <button class="btn btn-primary mt-2">
                <Link className="textWhite" to="/list">
                  Start a new list
                </Link>
              </button>
            </h3>
          </Col>
        </Row>
      </>
    );
  }
}

export default Bucket;
