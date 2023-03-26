---
title: 'How to Customize BizSteps in EPCIS 2.0 to Fit Your Business Requirements'
date: 2023-03-26
---

# How to Customize BizSteps in EPCIS 2.0 to Fit Your Business Requirements

EPCIS 2.0 is a new version of the Electronic Product Code Information Services (EPCIS) standard that has been developed by the Object Management Group (OMG). EPCIS 2.0 is designed to help businesses to track their products as they move through the supply chain, from manufacturers to retailers and beyond. One of the key features of EPCIS 2.0 is the BizSteps framework, which allows businesses to define their own custom steps in the supply chain and track their products as they move through these steps.

In this blog post, we will walk you through the process of customizing BizSteps in EPCIS 2.0 to fit your business requirements.

## What are BizSteps?

BizSteps are a key part of EPCIS 2.0, and they allow businesses to define their own custom steps in the supply chain. A BizStep can be thought of as a “checkpoint” in the supply chain, where specific actions or events take place. For example, a BizStep might represent the point at which a product is loaded onto a truck for delivery to a retailer.

BizSteps are defined using the EPCIS 2.0 Query Interface Language (QIL), which is a standard XML schema that allows businesses to define their own custom steps and the associated data that should be captured at each step.

## Why Customize BizSteps?

Customizing BizSteps is important because it allows businesses to track their products more accurately and meet their specific business requirements. For example, a business might want to track their products at a more granular level than is provided by the default BizSteps that are included in EPCIS 2.0. By customizing BizSteps, the business can define their own checkpoints and track their products at a more detailed level.

## How to Customize BizSteps in EPCIS 2.0

Customizing BizSteps in EPCIS 2.0 involves the following steps:

1. Define your new BizStep(s) using the EPCIS QIL schema
2. Add your new BizStep(s) to the EPCIS Implementation Guide (IG)
3. Update your EPCIS software to support the new BizStep(s)

Let’s take a closer look at each of these steps.

### Step 1: Define Your New BizStep(s) Using the QIL Schema

To define a new BizStep using the QIL schema, you will need to create an XML file that defines your new BizStep and the associated data that should be captured at each step. The QIL schema defines the structure of the XML file, including the tags, attributes, and data types that are allowed.

Here is an example of a new BizStep definition:

```xml
<bizstep name="MyNewBizStep"
   description="This is my new BizStep"
   type="urn:epcglobal:cbv:bizstep:mynewbizstep">
   <sourceList>
      <source type="urn:epcglobal:cbv:sdt:sourceId">urn:epc:id:sgln:12345.1234.0</source>
   </sourceList>
   <destinationList>
      <destination type="urn:epcglobal:cbv:sdt:destinationId">urn:epc:id:sgln:67890.5678.0</destination>
   </destinationList>
   <transformationList>
      <transformation type="urn:epcglobal:cbv:mda">http://www.example.com/transformations/mytransformation</transformation>
   </transformationList>
</bizstep>
```

In this example, we have defined a new BizStep called “MyNewBizStep”. We have provided a brief description of the BizStep, and we have assigned it a custom type of “urn:epcglobal:cbv:bizstep:mynewbizstep”. We have also defined the source and destination for this BizStep, and we have included a transformation that should be applied to the captured data.

Once you have defined your new BizStep using the QIL schema, you can save the XML file and move on to the next step.

### Step 2: Add Your New BizStep(s) to the EPCIS Implementation Guide

The EPCIS Implementation Guide (IG) is a document that provides guidance on how to implement the EPCIS standard. The IG includes a list of all the default BizSteps that are included in EPCIS 2.0, as well as guidance on how to define custom BizSteps.

To add your new BizStep(s) to the EPCIS IG, you will need to update the document to include your new BizStep definition. You should also include any guidance or documentation that is needed to help others understand how to use your new BizStep(s), including any data that should be captured at each step.

Once you have updated the EPCIS IG, you can move on to the final step.

### Step 3: Update Your EPCIS Software to Support the New BizStep(s)

The final step in customizing BizSteps in EPCIS 2.0 is to update your EPCIS software to support the new BizStep(s). This will require updating the software to recognize the new BizStep(s), and to capture and store the associated data at each checkpoint.

The exact steps required to update your EPCIS software will depend on the software that you are using. In general, you will need to modify the code that reads and writes BizStep data to include the new BizStep definition that you created in Step 1.

Once you have updated your EPCIS software, you can test it to ensure that your new BizStep(s) are working correctly.

## Conclusion

Customizing BizSteps in EPCIS 2.0 is an important step for businesses that need to track their products at a more granular level than is provided by the default BizSteps that are included in the standard. By defining your own custom BizSteps and associated data, you can track your products more accurately and meet your specific business requirements.

To customize BizSteps in EPCIS 2.0, you will need to define your new BizStep(s) using the QIL schema, add your new BizStep(s) to the EPCIS IG, and update your EPCIS software to support the new BizStep(s). With these steps, you can customize BizSteps in EPCIS 2.0 to fit your business requirements and track your products more accurately.
