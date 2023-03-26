---
title: 'Demystifying CBV in GS1 EPCIS 2.0: A Practical Guide '
date: 2023-03-26
---

# Demystifying CBV in GS1 EPCIS 2.0: A Practical Guide

## Introduction

The GS1 Electronic Product Code Information Services (EPCIS) 2.0 standard is a powerful tool for supply chain visibility and traceability. It provides a standardized way of sharing information about the movement of goods, including their origin, location, and status. CBVs, or Core Business Vocabulary, provide a set of predefined terms and concepts that are used to describe these events and objects in a consistent way.

In this article, we will dive deep into the concept of CBVs in GS1 EPCIS 2.0, and explain why they are such an important part of the standard. We will also provide a practical guide for working with CBVs, including examples of how to use them in real-world scenarios.

## What are CBVs in GS1 EPCIS 2.0?

CBVs are a set of predefined terms and concepts that are used to describe the events and objects that are tracked in GS1 EPCIS 2.0. They represent the common language of the supply chain, and provide a standardized way for different companies and systems to share information.

CBVs are organized into several categories, including:

- Object Event CBVs
- Aggregation Event CBVs
- Transformation Event CBVs
- Association Event CBVs

Each of these categories includes a set of terms that describe specific events and objects. For example, the Object Event CBVs include terms for describing the creation, arrival, departure, and disposal of objects.

## Why are CBVs important?

The use of CBVs in GS1 EPCIS 2.0 is critically important for a few reasons. 

First, they provide a standardized way of communicating about events and objects in the supply chain. This is important because it allows different companies and systems to communicate with each other seamlessly. With the use of CBVs, everyone knows what is meant by a “shipment” or an “order,” regardless of the system they are using.

Second, CBVs help to enforce data quality and consistency. By using a predefined set of terms and concepts, it is less likely that information will be misinterpreted or entered incorrectly. For example, if everyone agrees to use the CBV for “shipment,” then it’s less likely that someone will mistakenly use the term “delivery.” This makes it easier to accurately track and trace products as they move through the supply chain.

Finally, CBVs help to future-proof the system. As new types of objects and events are introduced to the supply chain, new CBVs can be added to the standard. This ensures that the system remains up-to-date, even as technology and business practices evolve.

## Working with CBVs in GS1 EPCIS 2.0

Now that we understand why CBVs are important, let’s take a practical look at how to work with them in GS1 EPCIS 2.0.

To use CBVs in your EPCIS implementation, you will need to first identify the types of events and objects that are relevant to your supply chain. This will typically include things like shipments, deliveries, receipts, and inventory transfers. Once you have a list of these events and objects, you can consult the appropriate CBV category to find the corresponding terms.

For example, if you want to describe a shipment of goods from one location to another, you would consult the Object Event CBVs. Here, you would find terms like “Arrival” and “Departure” that describe the movement of objects.

Once you have identified the appropriate CBV term, you can use it in your EPCIS events. For example, you might create an Object Event like this:

```
<ObjectEvent>
  <eventTime>2022-01-01T12:00:00Z</eventTime>
  <eventTimeZoneOffset>-05:00</eventTimeZoneOffset>
  <epcList>
    <epc>urn:epc:id:sgtin:12345678.0001.1</epc>
  </epcList>
  <action>ADD</action>
  <bizStep>http://ns.adobe.com/epcis/bizstep/shipment_departure</bizStep>
  <disposition>urn:epcglobal:cbv:disp:in_transit</disposition>
  <readPoint>
    <id>urn:epc:id:sgln:0457111.00001.0</id>
  </readPoint>
  <bizLocation>
    <id>urn:epc:id:sgln:0457111.00001.0</id>
  </bizLocation>
</ObjectEvent>
```

Here, we are using the CBV term for “shipment_departure” in the `<bizStep>` element. This helps to convey the specific event that is occurring – in this case, the departure of a shipment.

## Conclusion

In summary, CBVs are a critically important part of the GS1 EPCIS 2.0 standard. They provide a standardized way of communicating about events and objects in the supply chain, and help to enforce data quality and consistency. By using CBVs in your EPCIS implementation, you can ensure that your system is future-proof and up-to-date.

Working with CBVs requires a bit of upfront planning, but the benefits are well worth it. By identifying the types of events and objects that are relevant to your supply chain, and consulting the appropriate CBV categories to find the corresponding terms, you can create EPCIS events that accurately represent the movement of goods through your supply chain.

If you’re just getting started with GS1 EPCIS 2.0, take the time to familiarize yourself with the CBVs. By understanding how they work and how to use them, you can create a more effective and efficient supply chain, and drive greater value for your organization.
