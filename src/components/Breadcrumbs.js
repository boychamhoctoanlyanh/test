import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Example = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem><a href="/#">Home</a></BreadcrumbItem>
      <BreadcrumbItem><a href="/#">Web banner</a></BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Example;