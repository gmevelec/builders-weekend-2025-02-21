import {
  Accordion,
  Callout,
  Card,
  DataTable,
  Embed,
  Grid,
  LLM,
  Chat,
  Metrics,
  MetricsGrid,
  Panel,
  Input,
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectItems,
  DatePicker,
  DateRangePicker,
  Pre,
} from "@morph-data/components";
import { MDXComponents } from "mdx/types";
import Search from "./customComponents/Search";
import Languages from "./customComponents/Languages";
import Bookmark from "./customComponents/Bookmark";
import Quiz from "./customComponents/Quiz";
import { Button } from "@morph-data/components";
import Dashboard from "./customComponents/Dashboard";

export const customMDXComponents: MDXComponents = {
  DataTable,
  Embed,
  Metrics,
  MetricsGrid,
  Input,
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectItems,
  Card,
  Grid,
  Panel,
  Accordion,
  Callout,
  LLM,
  Chat,
  DatePicker,
  DateRangePicker,
  Search,
  Languages,
  Bookmark,
  Quiz,
  Button,
  Dashboard,
  pre: Pre,
};
