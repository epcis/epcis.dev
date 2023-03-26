---
title: 'GS1 EPCIS 2.0 and CBV - Key Concepts and Architecture Explained '
date: 2023-03-26
---

# GS1 EPCIS 2.0 and CBV - Key Concepts and Architecture Explained

## Introduction

GS1 is a global, not-for-profit organization that is dedicated to the design and implementation of standards for the identification, capture, and sharing of information about products, assets, and locations across industries. One of the most important standards developed by GS1 is the Electronic Product Code Information Services (EPCIS) standard. EPCIS enables businesses to track and trace products in real-time across their supply chains, creating a single source of truth for all entities involved.

In December 2018, GS1 released version 2.0 of the EPCIS standard, which introduced several upgrades, including the Core Business Vocabulary (CBV). In this blog post, we will explain the key concepts of GS1 EPCIS 2.0 and CBV and delve into their architecture for a detailed understanding of how they work.

## Key Concepts of GS1 EPCIS 2.0

### EPCIS Data Model

The EPCIS data model represents the backbone of the EPCIS standard. It is a hierarchical structure that defines the different levels of information related to the movement of products and assets in a supply chain. The model consists of four layers, namely event, object, aggregation, and transaction.

- Event Layer: This layer contains information about a specific occurrence in the supply chain, such as the shipping of a product or the receiving of goods.

- Object Layer: This layer represents the physical entity being tracked in the supply chain, such as a product or an asset.

- Aggregation Layer: This layer defines the relationship between objects and events, providing information about the hierarchy of the objects being tracked.

- Transaction Layer: This layer contains information about any changes made to the data stored in the EPCIS system.

### EPCIS Event Types

EPCIS defines four event types, namely object, aggregation, quantity, and transaction.

- Object Event: This event is used to report the addition, modification, or removal of an object in the supply chain.

- Aggregation Event: This event is used to report the creation, modification, or removal of an aggregation of objects in the supply chain.

- Quantity Event: This event is used to report the measurement of physical quantities related to an object or objects in the supply chain, such as weight or volume.

- Transaction Event: This event is used to report the change in ownership, custody, or possession of an object in the supply chain.

### EPCIS Information Service

The EPCIS information service is the system that enables the capture, storage, retrieval, and sharing of data across a supply chain. It provides real-time visibility into the movement of products and assets, giving businesses the ability to track their inventory levels, monitor the performance of their suppliers, and ensure compliance with regulatory requirements.

## Core Business Vocabulary (CBV)

The Core Business Vocabulary (CBV) is a standardized set of predefined terms that are used to describe the different aspects and attributes of objects and events in the supply chain. CBV is a critical addition to the EPCIS standard in version 2.0, as it provides a common language for all entities involved in the supply chain, enabling seamless communication and collaboration.

CBV defines three categories of terms, namely identification, location, and business.

- Identification Terms: These terms provide information about the identification of objects and events in the supply chain, such as the Global Trade Item Number (GTIN) or the Serial Shipping Container Code (SSCC).

- Location Terms: These terms provide information about the location of objects and events in the supply chain, such as the Global Location Number (GLN) or the Postal Address.

- Business Terms: These terms provide information about the parties involved in the supply chain, such as the manufacturer, the supplier, the transporter, and the retailer.

CBV enables businesses to create EPCIS events with standardized terminology, making it easier for all stakeholders to understand the data being shared. It also enables automated processing of EPCIS events, which can lead to significant improvements in supply chain efficiency and accuracy.

## Architecture of GS1 EPCIS 2.0 and CBV

The architecture of GS1 EPCIS 2.0 and CBV is designed to provide a flexible, scalable, and interoperable system that can be integrated with different technologies and platforms. At its core, the system consists of three components, namely the EPCIS repository, the EPCIS query interface, and the EPCIS subscription interface.

- EPCIS Repository: The EPCIS repository is the central database that stores all of the EPCIS events and data related to objects and events in the supply chain.

- EPCIS Query Interface: The EPCIS query interface enables businesses to search and retrieve specific EPCIS data from the repository based on predefined criteria.

- EPCIS Subscription Interface: The EPCIS subscription interface enables businesses to receive real-time updates on specific EPCIS events based on predefined criteria.

CBV is integrated into the architecture of GS1 EPCIS 2.0 through the use of custom CBV extension fields. These extension fields provide a standardized way to capture and store CBV data in EPCIS events. They also enable the creation of queries and subscriptions based on the CBV terms, providing enhanced querying capabilities for businesses.

## Conclusion

The GS1 EPCIS 2.0 and CBV standards are critical components in the design and implementation of an efficient and effective supply chain. They enable businesses to track and trace products in real-time, providing valuable insights into their inventory levels, supplier performance, and compliance with regulatory requirements. The addition of the CBV standards in version 2.0 has further improved the interoperability and collaboration between entities involved in the supply chain, enabling seamless communication and processing of information. By understanding the key concepts and architecture of GS1 EPCIS 2.0 and CBV, businesses can implement these standards to improve their supply chain operations and gain a competitive edge in their respective industries.
