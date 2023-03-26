---
title: 'A Step-by-Step Guide to Configuring BizSteps in EPCIS 2.0'
date: 2023-03-26
---

# A Step-by-Step Guide to Configuring BizSteps in EPCIS 2.0

As more enterprises adopt EPCIS (Electronic Product Code Information Services) 2.0 as their preferred standard for tracking and sharing product information, it becomes increasingly important for businesses to not only understand the basics but to also know how to configure it for optimal usage. In this step-by-step guide, we’ll walk you through the process of configuring BizSteps in EPCIS 2.0.

Before we start, it’s important to understand what BizSteps is and its purpose in EPCIS 2.0. BizSteps is an extension to the EPCIS standard that allows businesses to define custom steps in their supply chain processes. These steps can be used to better track and manage inventory, assets, and other product-related data. Now let’s get started with the configuration process.

## Step 1: Start with a clear understanding of your supply chain process

Before you start configuring BizSteps, it’s important to have a clear understanding of the process you want to track. Identify the key steps in your process and the information that needs to be captured at each step. This information will be used to configure the BizSteps.

## Step 2: Define the BizSteps

Once you have a clear understanding of your supply chain process, it’s time to define the BizSteps. To do this, you’ll need to create a document that outlines each step of your process along with the information that needs to be captured for each step.

In EPCIS 2.0, BizSteps are defined using the EPCIS Events. Each Event can have multiple BizSteps associated with it. The BizSteps are defined using the `bizstep` attribute in the Event XML.

Here’s an example of how to define a BizStep in EPCIS 2.0:

```xml
<EPCISEvent>
   <eventTime>2022-01-01T11:00:00.000Z</eventTime>
   <bizStep>Shipment Received</bizStep>
   <epcList>
      ...
   </epcList>
   <extension>
      ...
   </extension>
</EPCISEvent>
```

In this example, the `bizstep` attribute is set to “Shipment Received.” This indicates that the event is associated with the shipment received step of the supply chain process.

## Step 3: Configure the Events

Once the BizSteps have been defined, it’s time to configure the Events. In EPCIS 2.0, Events are used to track the movement of products through the supply chain. To configure the Events, you’ll need to define the basic information such as event time, event type, and location.

Here’s an example of how to configure an Event in EPCIS 2.0:

```xml
<EPCISEvent>
   <eventTime>2022-01-01T11:00:00.000Z</eventTime>
   <eventTimeZoneOffset>+01:00</eventTimeZoneOffset>
   <epcList>
      ...
   </epcList>
   <action>ADD</action>
   <bizStep>Shipment Received</bizStep>
   <disposition>In Progress</disposition>
   <readPoint>
      ...
   </readPoint>
</EPCISEvent>
```

In this example, we’ve added the following information to the event:

- The `eventTime` and `eventTimeZoneOffset`: these indicate when the event occurred.
- The `action`: this indicates the type of event.
- The `bizStep`: this is the BizStep associated with the event.
- The `disposition`: this indicates the current status of the event.
- The `readPoint`: this is the location where the event occurred.

## Step 4: Associate the BizSteps with the Events

Now that the Events have been configured, it’s time to associate the BizSteps with the Events. This is done using the `bizStep` attribute in the Event XML.

Here’s an example of how to associate a BizStep with an Event in EPCIS 2.0:

```xml
<EPCISEvent>
   <eventTime>2022-01-01T11:00:00.000Z</eventTime>
   <eventTimeZoneOffset>+01:00</eventTimeZoneOffset>
   <epcList>
      ...
   </epcList>
   <action>ADD</action>
   <bizStep>Shipment Received</bizStep>
   <disposition>In Progress</disposition>
   <readPoint>
      ...
   </readPoint>
</EPCISEvent>
```

In this example, the `bizStep` attribute is set to “Shipment Received.” This associates the event with the BizStep defined earlier in Step 2.

## Step 5: Test the Configuration

Before deploying the BizSteps configuration, it’s important to test it to ensure that it’s working as expected. You can use a tool like EPCIS-Simulator to simulate events and test the configuration.

Here’s an example of how to use EPCIS-Simulator to test the configuration:

1. Download and install EPCIS-Simulator.
2. Create a new Event XML file and add the Event information to it.
3. Add the BizStep information to the Event XML file using the `bizstep` attribute.
4. Use EPCIS-Simulator to submit the Event XML file and confirm that the BizSteps are being captured correctly.

## Step 6: Deploy the Configuration

Once you’re confident that the BizSteps configuration is working as expected, it’s time to deploy it. This can be done by adding the configuration to your EPCIS 2.0 instance.

Here’s an example of how to deploy the BizSteps configuration:

1. Log in to your EPCIS 2.0 instance.
2. Navigate to the configuration section.
3. Add the BizSteps configuration to the instance.
4. Test the configuration again to ensure that it’s working correctly.

## Conclusion

Configuring BizSteps in EPCIS 2.0 is an important step for any business looking to track and manage their supply chain processes more efficiently. By following the steps outlined in this guide, you can create a custom BizSteps configuration that meets the specific needs of your business. Remember to test your configuration thoroughly before deploying it to ensure that it’s working correctly.
