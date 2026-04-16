"use client"

import * as React from "react"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Switch } from "@workspace/ui/components/switch"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Slider } from "@workspace/ui/components/slider"
import { Progress } from "@workspace/ui/components/progress"
import { Separator } from "@workspace/ui/components/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Spinner } from "@workspace/ui/components/spinner"
import { Kbd } from "@workspace/ui/components/kbd"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { Toggle } from "@workspace/ui/components/toggle"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { NativeSelect } from "@workspace/ui/components/native-select"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Calendar } from "@workspace/ui/components/calendar"
import { Toaster } from "@workspace/ui/components/sonner"
import { MobileNav } from "@/components/mobile-nav"
import { ActivateAgentDialog } from "@/components/cards/activate-agent-dialog"
import { AnalyticsCard } from "@/components/cards/analytics-card"
import { AnomalyAlert } from "@/components/cards/anomaly-alert"
import { AssignIssue } from "@/components/cards/assign-issue"
import { BarChartCard } from "@/components/cards/bar-chart-card"
import { BarVisualizerCard } from "@/components/cards/bar-visualizer"
import { BookAppointment } from "@/components/cards/book-appointment"
import { CodespacesCard } from "@/components/cards/codespaces-card"
import { ContributionsActivity } from "@/components/cards/contributions-activity"
import { Contributors } from "@/components/cards/contributors"
import { EnvironmentVariables } from "@/components/cards/environment-variables"
import { FeedbackForm } from "@/components/cards/feedback-form"
import { FileUpload } from "@/components/cards/file-upload"
import { GithubProfile } from "@/components/cards/github-profile"
import { IconPreviewGrid } from "@/components/cards/icon-preview-grid"
import { InviteTeam } from "@/components/cards/invite-team"
import { Invoice } from "@/components/cards/invoice"
import { LiveWaveformCard } from "@/components/cards/live-waveform"
import { NoTeamMembers } from "@/components/cards/no-team-members"
import { NotFound } from "@/components/cards/not-found"
import { ObservabilityCard } from "@/components/cards/observability-card"
import { PieChartCard } from "@/components/cards/pie-chart-card"
import { ReportBug } from "@/components/cards/report-bug"
import { ShippingAddress } from "@/components/cards/shipping-address"
import { Shortcuts } from "@/components/cards/shortcuts"
import { SkeletonLoading } from "@/components/cards/skeleton-loading"
import { SleepReport } from "@/components/cards/sleep-report"
import { StyleOverview } from "@/components/cards/style-overview"
import { TypographySpecimen } from "@/components/cards/typography-specimen"
import { UIElements } from "@/components/cards/ui-elements"
import { UsageCard } from "@/components/cards/usage-card"
import { Visitors } from "@/components/cards/visitors"
import { WeeklyFitnessSummary } from "@/components/cards/weekly-fitness-summary"
import { AccountAccess } from "@/components/cards-02/account-access"
import { AlbumCard } from "@/components/cards-02/album-card"
import { CardOverview } from "@/components/cards-02/card-overview"
import { CatalogToolbar } from "@/components/cards-02/catalog-toolbar"
import { ClaimableBalance } from "@/components/cards-02/claimable-balance"
import { ContributionHistory } from "@/components/cards-02/contribution-history"
import { CoverArt } from "@/components/cards-02/cover-art"
import { DividendIncome } from "@/components/cards-02/dividend-income"
import { EmptyConnectBank } from "@/components/cards-02/empty-connect-bank"
import { EmptyDistributeTrack } from "@/components/cards-02/empty-distribute-track"
import { EmptyExploreCatalog } from "@/components/cards-02/empty-explore-catalog"
import { Faq } from "@/components/cards-02/faq"
import { FrontDoor } from "@/components/cards-02/front-door"
import { IndexInvesting } from "@/components/cards-02/index-investing"
import { KitchenIsland } from "@/components/cards-02/kitchen-island"
import { LoadingCard } from "@/components/cards-02/loading-card"
import { NewMilestone } from "@/components/cards-02/new-milestone"
import { NotificationSettings } from "@/components/cards-02/notification-settings"
import { Payments } from "@/components/cards-02/payments"
import { PayoutThreshold } from "@/components/cards-02/payout-threshold"
import { PowerUsage } from "@/components/cards-02/power-usage"
import { Preferences } from "@/components/cards-02/preferences"
import { QrConnect } from "@/components/cards-02/qr-connect"
import { ReceivingMethod } from "@/components/cards-02/receiving-method"
import { RecentTransactions } from "@/components/cards-02/recent-transactions"
import { ReleaseCatalog } from "@/components/cards-02/release-catalog"
import { RollerShades } from "@/components/cards-02/roller-shades"
import { SavingsProgress } from "@/components/cards-02/savings-progress"
import { SavingsTargets } from "@/components/cards-02/savings-targets"
import { SidebarNav } from "@/components/cards-02/sidebar-nav"
import { SocialLinks } from "@/components/cards-02/social-links"
import { StockPerformance } from "@/components/cards-02/stock-performance"
import { SyncingState } from "@/components/cards-02/syncing-state"
import { TransferFunds } from "@/components/cards-02/transfer-funds"
import { UpcomingPayments } from "@/components/cards-02/upcoming-payments"
import { PlayerStats } from "@/components/cards-02/player-stats"
import { Item, ItemContent, ItemSeparator } from "@workspace/ui/components/item"
import { Counter } from "@workspace/ui/components/counter"

export default function Page() {
  const [selectedValue, setSelectedValue] = React.useState("")
  const [isChecked, setIsChecked] = React.useState<boolean | "indeterminate">(
    false
  )
  const [isToggled, setIsToggled] = React.useState(false)
  const [sliderValue, setSliderValue] = React.useState([50])
  const [progress, setProgress] = React.useState(65)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TooltipProvider>
      <div className="min-h-svh bg-background">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-12">
            <div className="sticky top-0 z-50 -mx-4 mb-6 bg-background/90 px-4 py-3 backdrop-blur md:hidden">
              <MobileNav />
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">
                Component Library Showcase
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete UI component library with all variants and examples
              </p>
            </div>
          </header>

          {/* Preview Cards */}
          <section className="mb-16">
            <h2 id="preview-cards" className="mb-6 text-2xl font-semibold">Preview Cards</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ActivateAgentDialog />
              <AnalyticsCard />
              <AnomalyAlert />
              <AssignIssue />
              <BarChartCard />
              <BarVisualizerCard />
              <BookAppointment />
              <CodespacesCard />
              <ContributionsActivity />
              <Contributors />
              <EnvironmentVariables />
              <FeedbackForm />
              <FileUpload />
              <GithubProfile />
              <IconPreviewGrid />
              <InviteTeam />
              <Invoice />
              <LiveWaveformCard />
              <NoTeamMembers />
              <NotFound />
              <ObservabilityCard />
              <PieChartCard />
              <ReportBug />
              <ShippingAddress />
              <Shortcuts />
              <SkeletonLoading />
              <SleepReport />
              <StyleOverview />
              <TypographySpecimen />
              <UIElements />
              <UsageCard />
              <Visitors />
              <WeeklyFitnessSummary />
            </div>
          </section>

          {/* Preview Cards 02 */}
          <section className="mb-16">
            <h2 id="preview-cards-02" className="mb-6 text-2xl font-semibold">Preview Cards 02</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AccountAccess />
              <AlbumCard />
              <CardOverview />
              <CatalogToolbar />
              <ClaimableBalance />
              <ContributionHistory />
              <CoverArt />
              <DividendIncome />
              <EmptyConnectBank />
              <EmptyDistributeTrack />
              <EmptyExploreCatalog />
              <Faq />
              <FrontDoor />
              <IndexInvesting />
              <KitchenIsland />
              <LoadingCard />
              <NewMilestone />
              <NotificationSettings />
              <Payments />
              <PayoutThreshold />
              <PowerUsage />
              <Preferences />
              <QrConnect />
              <ReceivingMethod />
              <RecentTransactions />
              <ReleaseCatalog />
              <RollerShades />
              <SavingsProgress />
              <SavingsTargets />
              <SidebarNav />
              <SocialLinks />
              <StockPerformance />
              <SyncingState />
              <TransferFunds />
              <UpcomingPayments />
              <PlayerStats />
            </div>
          </section>

          <div className="space-y-16">
            {/* Buttons */}
            <section>
              <h2 id="buttons" className="mb-6 text-2xl font-semibold">Buttons</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Variants</h3>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="default">Default</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Sizes</h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <Button size="xs">Extra Small</Button>
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">Icon</Button>
                        <Button size="icon-xs">Icon XS</Button>
                        <Button size="icon-sm">Icon SM</Button>
                        <Button size="icon-lg">Icon LG</Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">States</h3>
                      <div className="flex flex-wrap gap-4">
                        <Button>Normal</Button>
                        <Button disabled>Disabled</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cards */}
            <section>
              <h2 id="cards" className="mb-6 text-2xl font-semibold">Cards</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Default Card</CardTitle>
                    <CardDescription>
                      Card description goes here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the card content area.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>Compact size variant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Smaller card content.</p>
                  </CardContent>
                </Card>
                <Card flush>
                  <div className="flex-1 p-3 pb-0">
                    <Card rounded="3xl" padding="sm" className="h-full">
                      <CardHeader>
                        <CardTitle>Inner Card</CardTitle>
                        <CardDescription>
                          This card is nested inside the outer card
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Item
                          variant="muted"
                          className="flex-col items-stretch"
                        >
                          <ItemContent className="gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                My opening balance
                              </span>
                              <span className="text-sm font-medium tabular-nums">
                                6.9m
                              </span>
                            </div>
                            <ItemSeparator margin="none" />
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                My post sale balance
                              </span>
                              <span className="text-sm font-semibold tabular-nums">
                                5.2m
                              </span>
                            </div>
                          </ItemContent>
                        </Item>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="mb-2 text-lg font-semibold">
                      Outer Card Content
                    </h3>
                    <p className="text-muted-foreground">
                      This is the bottom half of the outer card. It sits below
                      the nested card above and can contain any content you need
                      — text, actions, or additional details.
                    </p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Badges */}
            <section>
              <h2 id="badges" className="mb-6 text-2xl font-semibold">Badges</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="ghost">Ghost</Badge>
                    <Badge variant="link">Link</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Form Elements */}
            <section>
              <h2 id="form-elements" className="mb-6 text-2xl font-semibold">Form Elements</h2>
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="input">Input Field</Label>
                      <Input id="input" placeholder="Enter text..." />
                    </div>
                    <div>
                      <Label htmlFor="textarea">Textarea</Label>
                      <Textarea
                        id="textarea"
                        placeholder="Enter longer text..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="select">Select</Label>
                      <Select
                        value={selectedValue}
                        onValueChange={setSelectedValue}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="native-select">Native Select</Label>
                      <NativeSelect>
                        <option value="">Choose an option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </NativeSelect>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="checkbox"
                        checked={isChecked}
                        onCheckedChange={setIsChecked}
                      />
                      <Label htmlFor="checkbox">Checkbox</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="switch"
                        checked={isToggled}
                        onCheckedChange={setIsToggled}
                      />
                      <Label htmlFor="switch">Switch</Label>
                    </div>
                  </div>

                  <div>
                    <Label>Radio Group</Label>
                    <RadioGroup defaultValue="option1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option1" id="r1" />
                        <Label htmlFor="r1">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option2" id="r2" />
                        <Label htmlFor="r2">Option 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option3" id="r3" />
                        <Label htmlFor="r3">Option 3</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Progress & Sliders */}
            <section>
              <h2 id="progress-sliders" className="mb-6 text-2xl font-semibold">
                Progress & Sliders
              </h2>
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <Label>Progress Bar</Label>
                    <Progress value={progress} className="mt-2" />
                  </div>
                  <div>
                    <Label>Slider</Label>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Counter */}
            <section>
              <h2 id="counter" className="mb-6 text-2xl font-semibold">Counter</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <Counter label="Default" />
                    </div>
                    <div>
                      <Counter label="Bounded" defaultValue={5} min={0} max={10} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Navigation */}
            <section>
              <h2 id="navigation" className="mb-6 text-2xl font-semibold">Navigation</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Tabs</h3>
                    <Tabs defaultValue="tab1">
                      <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1" className="mt-4">
                        <p>Content for Tab 1</p>
                      </TabsContent>
                      <TabsContent value="tab2" className="mt-4">
                        <p>Content for Tab 2</p>
                      </TabsContent>
                      <TabsContent value="tab3" className="mt-4">
                        <p>Content for Tab 3</p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Breadcrumb</h3>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Navigation</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Pagination</h3>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Disclosure */}
            <section>
              <h2 id="disclosure" className="mb-6 text-2xl font-semibold">
                Disclosure Components
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Accordion</h3>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          What is this component?
                        </AccordionTrigger>
                        <AccordionContent>
                          This is an accordion component that allows users to
                          expand and collapse content sections.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>How does it work?</AccordionTrigger>
                        <AccordionContent>
                          It uses a combination of triggers and content areas
                          that can be toggled open or closed.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Can I customize it?</AccordionTrigger>
                        <AccordionContent>
                          Yes, accordion components are fully customizable with
                          different styles and behaviors.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Collapsible</h3>
                    <Collapsible
                      open={isCollapsibleOpen}
                      onOpenChange={setIsCollapsibleOpen}
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="outline">Toggle Content</Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <p>
                          This is collapsible content that can be shown or
                          hidden.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Overlays */}
            <section>
              <h2 id="overlays" className="mb-6 text-2xl font-semibold">
                Overlay Components
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">
                      Dialogs & Modals
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Dialog Title</DialogTitle>
                            <DialogDescription>
                              This is a dialog component with header and
                              content.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button>Confirm</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Alert Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button>Open Drawer</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Drawer Title</DrawerTitle>
                            <DrawerDescription>
                              This is a drawer component that slides from the
                              bottom.
                            </DrawerDescription>
                          </DrawerHeader>
                          <DrawerFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button>Submit</Button>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>

                      <Sheet>
                        <SheetTrigger asChild>
                          <Button>Open Sheet</Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Sheet Title</SheetTitle>
                            <SheetDescription>
                              This is a sheet component that slides from the
                              side.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="mt-6">
                            <p>Sheet content goes here.</p>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">
                      Tooltips & Popovers
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Tooltip</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This is a tooltip</p>
                        </TooltipContent>
                      </Tooltip>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline">Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <p>This is a popover with more content.</p>
                        </PopoverContent>
                      </Popover>

                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="outline">Hover Card</Button>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <p>This appears on hover.</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Menus */}
            <section>
              <h2 id="menus" className="mb-6 text-2xl font-semibold">Menu Components</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Dropdown Menu</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>Open Menu</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Context Menu</h3>
                    <ContextMenu>
                      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
                        Right click here
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuLabel>Actions</ContextMenuLabel>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Cut</ContextMenuItem>
                        <ContextMenuItem>Copy</ContextMenuItem>
                        <ContextMenuItem>Paste</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuSub>
                          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
                          <ContextMenuSubContent>
                            <ContextMenuItem>Email</ContextMenuItem>
                            <ContextMenuItem>SMS</ContextMenuItem>
                          </ContextMenuSubContent>
                        </ContextMenuSub>
                      </ContextMenuContent>
                    </ContextMenu>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Data Display */}
            <section>
              <h2 id="data-display" className="mb-6 text-2xl font-semibold">Data Display</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Table</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Role</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>John Doe</TableCell>
                          <TableCell>
                            <Badge>Active</Badge>
                          </TableCell>
                          <TableCell>Admin</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Jane Smith</TableCell>
                          <TableCell>
                            <Badge variant="secondary">Inactive</Badge>
                          </TableCell>
                          <TableCell>User</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Calendar</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Loading States */}
            <section>
              <h2 id="loading-states" className="mb-6 text-2xl font-semibold">Loading States</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Skeleton</h3>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[300px]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Spinner</h3>
                      <Spinner />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Utility Components */}
            <section>
              <h2 id="utility" className="mb-6 text-2xl font-semibold">
                Utility Components
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Separator</h3>
                      <div className="space-y-2">
                        <p>Content above</p>
                        <Separator />
                        <p>Content below</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Kbd</h3>
                      <div className="flex gap-2">
                        <Kbd>Ctrl</Kbd>
                        <span>+</span>
                        <Kbd>C</Kbd>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Avatar</h3>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Alert</h3>
                      <Alert>
                        <AlertTitle>Information</AlertTitle>
                        <AlertDescription>
                          This is an alert component for important messages.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Toggle Components */}
            <section>
              <h2 id="toggle" className="mb-6 text-2xl font-semibold">Toggle Components</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Toggle</h3>
                      <Toggle
                        pressed={isToggled}
                        onPressedChange={setIsToggled}
                      >
                        Toggle
                      </Toggle>
                    </div>
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Toggle Group</h3>
                      <ToggleGroup type="single">
                        <ToggleGroupItem value="left">Left</ToggleGroupItem>
                        <ToggleGroupItem value="center">Center</ToggleGroupItem>
                        <ToggleGroupItem value="right">Right</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Layout Components */}
            <section>
              <h2 id="layout" className="mb-6 text-2xl font-semibold">Layout Components</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Scroll Area</h3>
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                      <div className="space-y-2">
                        <p>This is scrollable content.</p>
                        <p>It demonstrates the ScrollArea component.</p>
                        <p>You can scroll through this content.</p>
                        <p>More content here...</p>
                        <p>Even more content...</p>
                        <p>Keep scrolling...</p>
                        <p>Almost there...</p>
                        <p>End of content.</p>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-medium">Aspect Ratio</h3>
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-muted-foreground">
                          16:9 Aspect Ratio
                        </span>
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Toast Notification */}
            <section>
              <h2 id="notifications" className="mb-6 text-2xl font-semibold">Notifications</h2>
              <Card>
                <CardContent className="p-6">
                  <Button>Show Toast (Demo Only)</Button>
                </CardContent>
              </Card>
            </section>
          </div>

          <footer className="mt-16 text-center text-muted-foreground">
            <p>
              Component Library Showcase - All components and variants
              demonstrated
            </p>
          </footer>
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}
