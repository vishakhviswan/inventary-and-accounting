import React from 'react'
import { Breadcrumb } from 'react-bootstrap'


function BreadcrumbSec() {
    return (
      <div className="breadcrumb_ParentDiv">
            <div className="breadcrumb_ChildDiv">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
}

export default BreadcrumbSec
