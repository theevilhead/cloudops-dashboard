"use client";

import React from "react";
import { Button } from "./ui/button";

function ResourceDetails() {
  return (
    <div className="container-padding flex flex-col gap-4 justify-center items-center h-screen">
      You would be seeing the details of the resource here.
      <Button
        variant={"outline"}
        onClick={() => window.history.go(-1)}
      >
        Go back
      </Button>
    </div>
  );
}

export default ResourceDetails;
