📦src
 ┣ 📂assets
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜anamnesis-questions.json
 ┃ ┃ ┗ 📜services.json
 ┃ ┗ 📂images
 ┃   ┣ 📜esteticista.jpg
 ┃   ┗ 📜logo.svg
 ┣ 📂components
 ┃ ┣ 📂Admin
 ┃ ┃ ┣ 📂AdminLayout
 ┃ ┃ ┃ ┗ 📜AdminLayout.jsx
 ┃ ┃ ┣ 📂DataTable
 ┃ ┃ ┃ ┗ 📜DataTable.jsx
 ┃ ┃ ┗ 📂Sidebar
 ┃ ┃   ┣ 📜Sidebar.jsx
 ┃ ┃   ┗ 📜SidebarLink.jsx
 ┃ ┣ 📂Scheduling
 ┃ ┃ ┣ 📂Steps
 ┃ ┃ ┃ ┣ 📜AddressStep.jsx
 ┃ ┃ ┃ ┣ 📜CategoryStep.jsx
 ┃ ┃ ┃ ┣ 📜DateTimeStep.jsx
 ┃ ┃ ┃ ┣ 📜PaymentStep.jsx
 ┃ ┃ ┃ ┣ 📜ServiceSelectionStep.jsx
 ┃ ┃ ┃ ┣ 📜ServiceTypeStep.jsx
 ┃ ┃ ┃ ┣ 📜SummaryStep.jsx
 ┃ ┃ ┃ ┗ 📂AnamnesisStep
 ┃ ┃ ┃   ┣ 📜CorporalAnamnesis.jsx
 ┃ ┃ ┃   ┗ 📜FacialAnamnesis.jsx
 ┃ ┃ ┣ 📜ConfirmationModal.jsx
 ┃ ┃ ┗ 📜SchedulingFlow.jsx
 ┃ ┗ 📂UI
 ┃   ┣ 📂Alert
 ┃   ┃ ┣ 📜Alert.css
 ┃   ┃ ┗ 📜Alert.jsx
 ┃   ┣ 📂Button
 ┃   ┃ ┣ 📜Button.css
 ┃   ┃ ┗ 📜Button.jsx
 ┃   ┣ 📂Card
 ┃   ┃ ┣ 📜Card.css
 ┃   ┃ ┗ 📜Card.jsx
 ┃   ┣ 📂Footer
 ┃   ┃ ┣ 📜Footer.css
 ┃   ┃ ┗ 📜Footer.jsx
 ┃   ┣ 📂Header
 ┃   ┃ ┣ 📜Header.css
 ┃   ┃ ┗ 📜Header.jsx
 ┃   ┣ 📂Input
 ┃   ┃ ┣ 📜Input.css
 ┃   ┃ ┗ 📜Input.jsx
 ┃   ┣ 📂Loader
 ┃   ┃ ┗ 📜Loader.jsx
 ┃   ┣ 📂Modal
 ┃   ┃ ┣ 📜Modal.css
 ┃   ┃ ┗ 📜Modal.jsx
 ┃   ┗ 📂Stepper
 ┃     ┗ 📜Stepper.jsx
 ┣ 📂context
 ┃ ┣ 📜AdminAuthContext.jsx
 ┃ ┗ 📜SchedulingContext.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useAdminAuth.js
 ┃ ┣ 📜useApi.js
 ┃ ┗ 📜useSchedulingNavigation.js
 ┣ 📂pages
 ┃ ┣ 📂Admin
 ┃ ┃ ┣ 📂Agendamentos
 ┃ ┃ ┃ ┣ 📂BookingDetails
 ┃ ┃ ┃ ┃ ┗ 📜DetailsPage.jsx
 ┃ ┃ ┃ ┗ 📜BookingsPage.jsx
 ┃ ┃ ┣ 📂Anamneses
 ┃ ┃ ┃ ┗ 📜AnamnesesPage.jsx
 ┃ ┃ ┣ 📂Clientes
 ┃ ┃ ┃ ┗ 📜ClientsPage.jsx
 ┃ ┃ ┣ 📂Configuracoes
 ┃ ┃ ┃ ┗ 📜SettingsPage.jsx
 ┃ ┃ ┣ 📂Dashboard
 ┃ ┃ ┃ ┗ 📜DashboardPage.jsx
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┗ 📜LoginPage.jsx
 ┃ ┃ ┗ 📂Servicos
 ┃ ┃   ┗ 📜ServicesPage.jsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂sections
 ┃ ┃ ┃ ┣ 📜AboutSection.jsx
 ┃ ┃ ┃ ┣ 📜ContactSection.jsx
 ┃ ┃ ┃ ┣ 📜HeroSection.jsx
 ┃ ┃ ┃ ┗ 📜ServicesSection.jsx
 ┃ ┃ ┗ 📜Home.jsx
 ┃ ┗ 📂Scheduling
 ┃   ┗ 📜SchedulingPage.jsx
 ┣ 📂routes
 ┃ ┗ 📜ProtectedRoute.jsx
 ┣ 📂theme
 ┃ ┣ 📜colors.js
 ┃ ┣ 📜spacing.js
 ┃ ┗ 📜typography.js
 ┣ 📂utils
 ┃ ┣ 📜formValidators.js
 ┃ ┣ 📜generateBookingId.js
 ┃ ┗ 📜helpers.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx