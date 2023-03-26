# Achieving end-to-end visibility with EPCIS 2.0 and the CBV

The EPCIS standard has been around for over a decade now, and it has become a key enabler for supply chain visibility and traceability. EPCIS 2.0 is the latest version of the standard, and it brings significant improvements over its predecessors. One of the most important enhancements is the addition of the Core Business Vocabulary (CBV), which provides a common language for communicating events and other data across supply chain partners. In this blog post, we will explore how EPCIS 2.0 and the CBV can be used together to achieve end-to-end visibility.

## What is EPCIS?

Before we dive into EPCIS 2.0 and the CBV, let's first review what EPCIS is all about. EPCIS stands for Electronic Product Code Information Services, and it is a standard for exchanging information about products as they move through the supply chain. EPCIS defines a set of event types that represent different stages in the product lifecycle, such as manufacture, shipment, receipt, and sale. The standard also specifies how these events should be encoded and transmitted between supply chain partners.

EPCIS has several benefits for supply chain visibility and traceability. By capturing and sharing event data in a standardized way, EPCIS can help organizations gain a better understanding of their supply chain operations. This, in turn, can help them identify areas for improvement, reduce waste, and improve customer satisfaction. EPCIS can also help with regulatory compliance, such as the FDA's Drug Supply Chain Security Act (DSCSA) and the EU's Falsified Medicines Directive (FMD).

## What's new in EPCIS 2.0?

EPCIS 2.0 is the latest version of the standard, and it introduces several improvements over previous versions. One of the most significant enhancements is the Core Business Vocabulary (CBV).

The CBV is a set of standardized terms and concepts that provide a common language for communicating event data across supply chain partners. Before the CBV, each organization had its own way of describing events and data, which made it difficult to reconcile information and extract insights. With the CBV, all organizations can speak the same language, which makes it easier to share and analyze data.

The CBV includes definitions for over 220 event types, as well as standardized data elements for describing products, locations, and other key aspects of the supply chain. The CBV is designed to be extensible, which means that organizations can add their own terms and concepts as needed.

EPCIS 2.0 also introduces several changes to the way events are encoded and transmitted. For example, EPCIS 2.0 uses a more flexible JSON data format instead of the XML format used in previous versions. EPCIS 2.0 also supports real-time event reporting via web sockets, which enables faster and more efficient communication between supply chain partners.

## Achieving end-to-end visibility with EPCIS 2.0 and the CBV

So, how can EPCIS 2.0 and the CBV be used together to achieve end-to-end visibility? Let's look at a hypothetical example.

Imagine a pharmaceutical manufacturer that produces a batch of medication and ships it to a distributor. The manufacturer uses EPCIS 2.0 to record an "item shipped" event, which includes information such as the batch number, the quantity shipped, and the destination. The "item shipped" event uses the CBV to describe the event in a standardized way, using terms such as "EPCList", "bizLocation", and "product".

The distributor receives the medication and scans each individual package using an RFID reader. The RFID reader captures the unique identifier for each package, which is associated with the "item shipped" event in EPCIS 2.0. The distributor then records an "item received" event in EPCIS 2.0, which includes the RFID identifier, the time of receipt, and the condition of the package. Again, the "item received" event uses the CBV to describe the event in a standardized way.

The distributor then sells the medication to a pharmacy chain. The pharmacy chain uses EPCIS 2.0 to record an "item sold" event, which includes information such as the quantity sold, the price, and the buyer. The "item sold" event is associated with the "item received" event in EPCIS 2.0, which is associated with the "item shipped" event from the manufacturer. All three events use the CBV to describe the events in a standardized way.

Now, let's say that the medication is later recalled due to a quality issue. With EPCIS 2.0 and the CBV, it is easy to identify all of the affected packages and trace them back to their source. By querying the EPCIS 2.0 data, the manufacturer can see that the recalled packages were part of the batch that was shipped to the distributor, which then sold the medication to the pharmacy chain. The manufacturer can then work with the distributor and the pharmacy chain to ensure that all affected packages are removed from circulation.

This example illustrates how EPCIS 2.0 and the CBV can provide end-to-end visibility and traceability across the supply chain. By using standardized terms and concepts, organizations can communicate event data in a consistent and efficient way. This, in turn, makes it easier to analyze the data and gain insights into supply chain operations.

## Conclusion

The EPCIS standard has been a game-changer for supply chain visibility and traceability, and EPCIS 2.0 takes it to the next level. The addition of the Core Business Vocabulary provides a common language for communicating event data across supply chain partners, which makes it easier to share and analyze data. By using EPCIS 2.0 and the CBV, organizations can achieve end-to-end visibility and traceability across the supply chain, which can help them identify areas for improvement, reduce waste, and improve customer satisfaction. EPCIS 2.0 and the CBV are essential tools for any organization that wants to transform its supply chain operations.
