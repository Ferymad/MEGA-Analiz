# Masterplan.md

## Table of Contents
1. [App Overview and Objectives](#app-overview-and-objectives)
2. [Target Audience](#target-audience)
3. [Core Features and Functionality](#core-features-and-functionality)
4. [High-Level Technical Stack Recommendations](#high-level-technical-stack-recommendations)
5. [Conceptual Data Model](#conceptual-data-model)
6. [User Interface Design Principles](#user-interface-design-principles)
7. [Security Considerations](#security-considerations)
8. [Development Phases and Milestones](#development-phases-and-milestones)
9. [Potential Challenges and Solutions](#potential-challenges-and-solutions)
10. [Future Expansion Possibilities](#future-expansion-possibilities)

## App Overview and Objectives

### Overview
Develop a web-based, user-authenticated, role-based system to streamline data entry, tracking, analytics, and reporting for your company's various work branches. The initial focus will be on the **door frame production** branch, with placeholders for other branches to be added later.

### Objectives
- **Streamline Data Entry**: Replace manual Excel data entry with an efficient web application.
- **Improve Data Accessibility**: Enable real-time access to production data, analytics, and reports.
- **Enhance Decision-Making**: Provide dashboards, charts, and automated reports for insights into production metrics and costs.
- **Ensure Scalability**: Build a modular and scalable system that's open to future expansions and adjustments.
- **Facilitate AI-Assisted Development**: Utilize AI tools effectively by maintaining extensive documentation and session management.
- **Support Multilingual Use**: Implement English and Turkish language support.
- **Implement Robust Testing and Deployment Practices**: Ensure high code quality and smooth deployments.
- **Incorporate User Feedback Mechanisms**: Enable continuous improvement based on user input.

## Target Audience

- **Internal Staff**:
  - **Production Operators**: Input daily production data; interface in Turkish.
  - **Production Engineers**: Access all data, perform analyses; interface in Turkish.
  - **Owners**: Read-only access to view overall performance and metrics; interface in Turkish or English.
  - **Reporting Staff**: Generate reports without full engineer privileges; interface in Turkish or English.
  - **Administrators**: Developer access to manage the system; interface in English.

## Core Features and Functionality

1. **User Authentication and Role-Based Access Control**
   - Secure login system with roles determining access levels.
   - Integration with Supabase Auth for ease of implementation.
   - Multilingual support during authentication.
   - Roles include:
     - **Production Operator**
     - **Production Engineer**
     - **Owner**
     - **Reporting Staff**
     - **Administrator**

2. **Data Entry Interface**
   - User-friendly, multilingual forms for production operators.
   - Fields to input inventory levels, production outputs, shifts, and other key metrics.
   - Immediate feedback on data submission (success or error messages).
   - Validation and error messages designed for clarity and helpfulness.

3. **Inventory and Production Management**
   - Track inventory levels of raw materials and finished products.
   - Update inventory based on daily inputs.
   - Notification system for inventory levels reaching critical thresholds.
   - Historical data storage for trend analysis.

4. **Cost Calculation**
   - Input costs for raw materials, chemicals, labor, and weekly currency rates.
   - Store historical currency rates to account for fluctuations.
   - Automatic calculation of total costs and cost per unit.

5. **Dashboards and Analytics**
   - Visual representations of key metrics using Recharts.
     - Daily production volume.
     - Door frame and ledge production per hour.
     - Inventory levels.
     - Cost analyses.
     - Production efficiency over time.
   - Customizable views for different user roles.
   - Include charts, graphs, and tables.

6. **Automated Reporting**
   - Generate automated reports based on production data.
   - Reports available in PDF and Excel formats.
   - Scheduled reports and on-demand report generation.
   - Access controlled based on user roles.

7. **Notification System**
   - Alerts for inventory thresholds.
   - Notifications for pending tasks or data submissions.
   - In-app notifications and optional email alerts.

8. **Internationalization (i18n)**
   - Support for English and Turkish languages.
   - Use react-i18next for managing translations.
   - Users can select their preferred language.

9. **User Feedback Mechanism**
   - In-app feedback form for users to report issues or suggest improvements.
   - Feedback stored and accessible to administrators.

10. **API Design Principles**
    - Design RESTful APIs to allow future integration with other systems.
    - Secure APIs with proper authentication and authorization.
    - Document APIs for ease of use.

11. **Documentation and Session Management**
    - Extensive documentation following the dotai format.
    - Organized session folders to keep AI development sessions contextually relevant and manageable.
    - Immediate updates to documentation reflecting any changes.

## High-Level Technical Stack Recommendations

**Frontend**

- **Framework**: **React.js** (starting with JavaScript, moving to TypeScript when comfortable)
  - **Reason**: Familiarity, community support, and compatibility with AI tools.
- **State Management**: **React Query** alongside **Context API**
  - **Reason**: Simplifies data fetching and caching, handles server state elegantly.
- **UI Component Library**: **Material-UI (MUI)**
  - **Reason**: Highly customizable, aligns with desire for a consistent and flexible UI.
- **Data Visualization**: **Recharts**
  - **Reason**: Easy integration with React, suitable for required charts.
- **Internationalization**: **react-i18next**
  - **Reason**: Simplifies implementation of multilingual support.

**Backend**

- **Backend as a Service (BaaS)**: **Supabase**
  - **Reason**: Ease of use, SQL capabilities without deep expertise, built-in auth.
- **Database**: **PostgreSQL** (managed by Supabase)
  - **Reason**: Relational database suitable for structured data and complex queries.
- **Authentication**: **Supabase Auth**
  - **Reason**: Simplifies authentication and role management.
- **API Development**: **RESTful APIs** using **Supabase Functions** or **Node.js (if needed)**
  - **Reason**: Allows future integrations and flexibility.

**Development Tools**

- **Package Manager**: **npm**
  - **Reason**: Default with Node.js, simplicity.
- **Version Control**: **Git** with **GitHub** or **GitLab**
  - **Reason**: Familiarity, essential for managing code changes.
- **CI/CD Pipeline**: **GitHub Actions** or **GitLab CI/CD**
  - **Reason**: Automates testing and deployment processes.
- **Error Monitoring**: **Sentry** or **LogRocket**
  - **Reason**: Helps in tracking and fixing errors.

**Testing Frameworks**

- **Unit Testing**: **Jest**
- **Component Testing**: **React Testing Library**
- **Integration and End-to-End Testing**: **Cypress**

**Documentation**

- **Format**: Markdown files (.md) in a structured .ai folder
  - **Reason**: Keeps documentation organized and accessible.

## Conceptual Data Model

**Entities and Relationships:**

1. **Users**
   - Attributes: `UserID`, `Name`, `Role`, `Email`, `Password`, `PreferredLanguage`
   - Relationships: Can input data, view analytics, generate reports based on role.

2. **InventoryItems**
   - Attributes: `ItemID`, `ItemName`, `Category (Raw Material/Finished Product)`, `Quantity`, `Unit`, `ThresholdQuantity`
   - Relationships: Updated based on production inputs and outputs.

3. **ProductionData**
   - Attributes: `ProductionID`, `Date`, `ProductionShiftID`, `OperatorID`, `DoorFramesProduced`, `LedgesProduced`, `ProductionTime`
   - Relationships: Linked to `Users`, `ProductionShift`, and affects `InventoryItems`.

4. **ProductionShift**
   - Attributes: `ProductionShiftID`, `ShiftName`, `StartTime`, `EndTime`
   - Relationships: Associated with `ProductionData` for detailed shift tracking.

5. **Costs**
   - Attributes: `CostID`, `MaterialCost`, `ChemicalCost`, `LaborCost`, `CurrencyRateID`, `TotalCost`
   - Relationships: Calculated from `InventoryItems` and linked to `CurrencyRates`.

6. **CurrencyRates**
   - Attributes: `RateID`, `WeekStartingDate`, `Currency`, `Rate`
   - Relationships: Used in cost calculations, stored historically.

7. **AuditLog**
   - Attributes: `AuditID`, `UserID`, `Action`, `EntityAffected`, `Timestamp`, `OldValue`, `NewValue`
   - Relationships: Tracks changes made by users for accountability.

8. **Feedback**
   - Attributes: `FeedbackID`, `UserID`, `Message`, `Timestamp`, `Status`
   - Relationships: Linked to `Users`, accessible to administrators.

## User Interface Design Principles

- **Simplicity and Clarity**
  - Clean layout with intuitive navigation.
  - Clear labels and instructions for forms in both languages.

- **Consistency**
  - Uniform color schemes, typography, and component styles using MUI theming.
  - Consistent placement of navigation elements.

- **Responsiveness**
  - Designs that adapt to various screen sizes.
  - Touch-friendly elements for mobile devices.

- **Data Visualization**
  - Use of Recharts for charts and graphs.
  - Interactive elements to filter and drill down into data.

- **Accessibility**
  - Consideration for color contrast and font sizes.
  - Multilingual support throughout the application.

- **Immediate Feedback**
  - Users receive instant confirmation or error messages after actions.
  - Feedback messages are clear, helpful, and adhere to design guidelines.

## Security Considerations

- **Authentication and Authorization**
  - Implement robust authentication mechanisms using Supabase Auth.
  - Role-based access control to restrict data visibility and actions.

- **Data Protection**
  - Use HTTPS for all data transmission.
  - Supabase handles encryption at rest and in transit.

- **Validation and Sanitization**
  - Validate all user inputs on both client and server sides.
  - Sanitize data displayed to users to prevent XSS attacks.

- **Error Handling and Logging**
  - Implement global error handlers.
  - Use tools like Sentry for monitoring.

- **Audit Logging**
  - Track changes to critical data for accountability.
  - Store logs securely and provide access to administrators.

- **API Security**
  - Secure APIs with authentication tokens.
  - Implement rate limiting and input validation.

## Development Phases and Milestones

1. **Phase 1: Planning and Design**
   - Define detailed requirements.
   - Set up project structure with .ai folder for documentation.
   - Choose and set up development tools and environments.
   - Initialize Git repository.
   - Establish coding standards and guidelines.

2. **Phase 2: Setup CI/CD Pipeline**
   - Configure GitHub Actions or GitLab CI/CD.
   - Automate testing and deployment processes.
   - Ensure smooth integration with Supabase and hosting platforms.

3. **Phase 3: Setup Internationalization**
   - Implement react-i18next.
   - Prepare language files for English and Turkish.
   - Ensure all UI elements support multilingual text.

4. **Phase 4: Setup Authentication and User Roles**
   - Implement Supabase Auth.
   - Define user roles and permissions.
   - Create user registration and management interfaces.

5. **Phase 5: Develop Data Entry Forms**
   - Create multilingual forms for production operators.
   - Implement immediate feedback on user actions.
   - Include client-side and server-side validation.

6. **Phase 6: Implement Inventory and Production Management**
   - Set up database schemas in Supabase.
   - Develop functionality to update and track inventory levels.
   - Implement notification system for inventory thresholds.

7. **Phase 7: Cost Calculation Module**
   - Create interfaces for inputting costs and weekly currency rates.
   - Implement cost calculation logic, storing historical currency rates.
   - Display cost data in dashboards and reports.

8. **Phase 8: Develop Dashboards and Analytics**
   - Design dashboards using Recharts.
   - Integrate charts for key metrics, including production efficiency over time.
   - Ensure data is presented clearly and interactively.

9. **Phase 9: Automated Reporting Feature**
   - Develop report generation functionality.
   - Allow users to generate and download reports.
   - Implement access control based on user roles.

10. **Phase 10: User Feedback Mechanism**
    - Add in-app feedback form.
    - Set up backend to store and manage feedback.
    - Establish a process for reviewing and acting on feedback.

11. **Phase 11: Testing and Quality Assurance**
    - **Unit Testing**: Begin writing unit tests with Jest and React Testing Library.
    - **Integration Testing**: Use Cypress for end-to-end testing.
    - **Performance Testing**: Optimize code and queries for performance.

12. **Phase 12: Error Handling and Logging**
    - Implement error boundaries in React.
    - Set up Sentry or LogRocket for monitoring.
    - Ensure logs are stored securely and accessible as needed.

13. **Phase 13: API Development and Documentation**
    - Design RESTful APIs for future integrations.
    - Secure APIs with proper authentication.
    - Document APIs for internal and future external use.

14. **Phase 14: Performance Optimization**
    - Optimize frontend performance (code splitting, lazy loading).
    - Optimize database queries and indexing.
    - Conduct load testing to ensure scalability.

15. **Phase 15: Deployment**
    - Deploy the application to Vercel or Netlify.
    - Set up Supabase hosting.
    - Finalize domain settings and SSL certificates.

16. **Phase 16: Training and Change Management**
    - Prepare user guides and training materials in both languages.
    - Conduct training sessions with staff.
    - Gather initial user feedback for final adjustments.

17. **Phase 17: Go Live and Post-Deployment Support**
    - Launch the application.
    - Monitor for issues and address them promptly.
    - Continue to gather user feedback and make iterative improvements.

## Potential Challenges and Solutions

- **Data Migration from Excel**
  - **Challenge**: Existing data is in Excel with macros.
  - **Solution**: Start with initial data. Explore importing data into Supabase or manually input essential data.

- **Package Compatibility**
  - **Challenge**: Dependency conflicts during development.
  - **Solution**: Use LTS versions of Node.js, regularly update packages, and read documentation before adding new dependencies.

- **AI Development Constraints**
  - **Challenge**: Limited context windows in AI tools.
  - **Solution**: Keep sessions concise, use the .ai folder for context management, and update documentation immediately after changes.

- **Currency Fluctuations**
  - **Challenge**: Unstable local currency affecting cost calculations.
  - **Solution**: Implement weekly manual input of currency rates, store historical data for analysis.

- **Developer Experience**
  - **Challenge**: Limited development experience could lead to complications.
  - **Solution**: Keep the technology stack simple, follow best practices, and focus on learning resources.

- **Error Handling**
  - **Challenge**: Debugging can become difficult without proper error handling.
  - **Solution**: Implement robust error handling and logging from the beginning.

- **Scalability Challenges**
  - **Challenge**: Data volume may grow over time, affecting performance.
  - **Solution**: Optimize database queries, use indexing, and ensure Supabase plan supports scaling.

- **Potential Resistance to Change**
  - **Challenge**: Staff may resist moving from Excel to the new system.
  - **Solution**: Involve users in the development process, provide training, and highlight the benefits.

## Future Expansion Possibilities

- **Additional Work Branches**
  - Incorporate modules for aluminum cutting, gaming chair production, and door sales.

- **Business