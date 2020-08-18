// Delegate-Based Factories
public delegate ITextProcessor CreateProcessorFactory();
public delegate ILogger CreateLoggerFactory();

public class DelegateProcessorFactory
{
  public CreateProcessorFactory CreateProcessor { get; set; }
  public CreateLoggerFactory CreateLogger { get; set; }

  public DelegateProcessorFactory()
  {
    this.CreateProcessor = new CreateProcessorFactory(() => new FileProcessor());
    this.CreateLogger = new CreateLoggerFactory(() => new FileLogger());
  }
}